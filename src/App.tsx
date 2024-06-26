import { useState } from "react"
import CodeDisplay from "./components/CodeDisplay"
import MessagesDisplay from "./components/MessagesDisplay"

interface ChatData{
  role: string, 
  content: string
}

const App = () => {
  const [value, setValue] = useState<string>("")
  const [chat, setChat] = useState<ChatData[]>([])

  const getQuery = async () => {
    try{
      const options: RequestInit = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: value
        })
      }
      const response = await fetch("http://localhost:8000/completions", options)
      const data: ChatData = await response.json()
      console.log(data)
      const userMessage = {
        role: "user",
        content: value
      }
      setChat(oldChat => [...oldChat, data, userMessage])
    } catch(error){
      console.error(error)
    }
  }

  const clearChat = () => {
    setValue("")
    setChat([])
  }

  console.log(value)
  console.log(chat)

  const filteredUserMessages = chat.filter(message => message.role === "user")
  const latestCode = chat.filter(message => message.role === "assistant").pop()

  return (
    <div className="app">
      <MessagesDisplay userMessages={filteredUserMessages}/>
      <input value={value} onChange={e => setValue(e.target.value)} placeholder="Write a query over here..."/>
      <CodeDisplay text={latestCode?.content || ""}/>
      <div className="button-container">
        <button id="get-query" onClick={getQuery}>Get Query!</button>
        <button id="clear-chat" onClick={clearChat}>Clear Chat</button>
      </div>
    </div>
  )
}

export default App