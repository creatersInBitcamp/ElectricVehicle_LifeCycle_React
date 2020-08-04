import React, {useState} from 'react';
const SocketClient = () => {
    const [messages, setMessages] = useState([])
    const [username, setUsername] = useState("")
    const [message, setMessage] = useState("")
    return (
        <div>
            <div className="messages" style={{width : "300px", height : "500px", border : "1px solid black"}}>
                {messages.map(item=>{
                    return (
                        <div key={item.id}>{item.author} : {item.message}</div>
                    )
                })}
            </div><br/>
            <input type="text" placeholder="Username" className="form-control" value={username} onChange={e=>setUsername(e.target.value)}/>
            <br/>
            <input type="text" placeholder="Message" className="form-control" value={message} onChange={e=>setMessage(e.target.value)}/>
            <br/>
            <input type="button" value="msg submit" onClick={onclick}/>
            <br/>
            <button>방 나가기</button>
        </div>
    );
};


export default SocketClient;