import React, { Component, ChangeEvent } from "react";
import SockJS from "sockjs-client";
import Stomp, { Client, Message } from "stompjs";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBInput,
} from "mdb-react-ui-kit";

interface State {
  endpoint: string;
  message: string;
  messages: { content: string; avatar: string }[];
  connected: boolean;
  stompClient: Client | null;
  subscription: Stomp.Subscription | null;
  socket: WebSocket | null;
}

class ChatApp extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      endpoint: "http://localhost:8080/chat-app",
      message: "",
      messages: [],
      connected: false,
      stompClient: null,
      subscription: null,
      socket: null,
    };
  }

  componentDidMount() {
    this.initializeWebSocket();
  }

  initializeWebSocket = () => {
    const { endpoint } = this.state;

    const socket = new SockJS(endpoint);
    const stompClient = Stomp.over(socket);

    stompClient.connect({}, () => {
      this.setState({
        stompClient,
        connected: true,
        socket,
      });

      // Check if the subscription already exists before subscribing
      if (!this.state.subscription) {
        const subscription = stompClient.subscribe(
          "/topic/public",
          (message: Message) => {
            this.handleReceivedMessage(message);
          }
        );
        this.setState({ subscription });
      }
    });
  };

  componentWillUnmount() {
    const { stompClient, socket } = this.state;
    if (stompClient) {
      stompClient.disconnect(() => {
        console.log("Stomp client disconnected");
      });
    }
    if (socket) {
      socket.close();
    }
  }

  handleReceivedMessage = (message: Message) => {
    // Parse the JSON message content
    const parsedMessage = JSON.parse(message.body) as {
      content: string;
      avatar: string;
    };

    // Extract the message content and avatar from the parsed message
    const { content, avatar } = parsedMessage;

    if (content) {
      this.setState((prevState) => ({
        messages: [...prevState.messages, { content, avatar }],
      }));
    }
  };

  handleMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ message: e.target.value });
  };

  handleSendMessage = () => {
    const { stompClient, message } = this.state;
    if (message.trim() !== "") {
      stompClient?.send(
        "/app/chat.send",
        {},
        JSON.stringify({ content: message })
      );
      this.setState({ message: "" });
    }
  };

  render() {
    const {  message, messages } = this.state;

    return (
      <MDBContainer>
      <MDBCard>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md="1">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(21).webp"
                alt="avatar"
                className="img-fluid rounded-circle"
              />
            </MDBCol>
            <MDBCol md="10">
              <div className="d-flex align-items-center">
                <div className="flex-grow-1">
                  <MDBInput
                    type="text"
                    placeholder="Type Your Comment"
                    value={message}
                    onChange={this.handleMessageChange}
                  />
                </div>
                <button
                  onClick={this.handleSendMessage}
                  style={{
                    backgroundColor: "blue",
                    color: "white",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    border: "none",
                    cursor: "pointer",
                    marginLeft: "10px",
                  }}
                >
                  Send
                </button>
              </div>
            </MDBCol>
          </MDBRow>
          <div className="mt-3">
            {messages.map((msg, index) => (
              <div key={index} className="d-flex align-items-center mb-3">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(21).webp"
                  alt="avatar"
                  className="img-fluid rounded-circle mr-2"
                  style={{ width: "30px", height: "30px" }}
                />
                <div className="bg-light p-2 rounded">{msg.content}</div>
              </div>
            ))}
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
    );
  }
}

export default ChatApp;
