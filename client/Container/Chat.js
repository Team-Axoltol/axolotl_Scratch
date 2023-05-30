import React from "react";
import io from 'socket.io-client';
class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '', message: '', messages: [] };
        this.socket = io('http://localhost:8082');
        this.socket.on('RECEIVE_MESSAGE', function (data) {
            console.log("YOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOclientOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
            addMessage(data);
        });
        const addMessage = data => {
            console.log(data);
            this.setState({ messages: [...this.state.messages, data] });
            console.log(this.state.messages);
        };
        this.sendMessage = ev => {
            ev.preventDefault();
            this.socket.emit('SEND_MESSAGE', { author: this.state.username, message: this.state.message });
            this.setState({ message: '' });

        }
    } render() { 
        return (
            <div> 
            <div> 
            <div> 
            <div> 
            <div> 
            <div>ChatRoom</div>
             <hr /> 
             <div> 
                {this.state.messages.map(message => { 
                    return (<div>{message.author}: {message.message}</div>) })} 
                    </div>
                        </div> 
                            <div> 
                                <input type="text" placeholder="UserName" value={this.state.username} onChange={ev => this.setState({ username: ev.target.value })} className="form-control" /> 
                            <br /> 
                                <input type="text" placeholder="Content" className="form-control" value={this.state.message} onChange={ev => this.setState({ message: ev.target.value })} /> 
                            <br /> 
                                <button onClick={this.sendMessage} className="btn btn-primary form-control">Send</button> 
                                    </div> 
                                </div> 
                            </div> 
                        </div> 
                     </div>
            ); 
        }
}

export default Chat;

