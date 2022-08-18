import React, { useState } from 'react'
import styled from 'styled-components'


function Todoapp() {
    const [Items,setItems]=useState([]);
    const [completedItems,setCompletedItems]=useState([]);
    const [Input,setInput]=useState("");

    console.log("input", Input)

    const addItem = () =>{
        console.log("add");
        setItems([...Items,{
            id : Items.length,
            title : Input
        }])
        setInput("")
    }

    const deleteItem = () =>{
        console.log("delete");
    }

  return (
    <Container>
        <Heading>ToDO List</Heading>
        <Donecontainer>
            <SubHeading>Things to be done</SubHeading>
            <TodoList>
                {
                    Items.map(item=>(
                        <Todoitem >
                            <DoneitemRound></DoneitemRound>
                            <Todoworks>{item.id},{item.title}</Todoworks>
                            <DeleteButton>
                                <Delete src={require('../../assets/delete.svg').default } alt="Delete" onClick={deleteItem} />
                            </DeleteButton>
                        </Todoitem>
                    ))
                }
            </TodoList>
            <NewTask>
                <AddDiv>
                    <Plus src={require('../../assets/plus.svg').default } alt="Add"></Plus>
                </AddDiv>
                <NewTaskInput placeholder='Type new task..' value={Input} onChange={(e)=> setInput(e.target.value)} ></NewTaskInput>
                <AddNewButton onClick={addItem} >Add New</AddNewButton>
            </NewTask>
        </Donecontainer>
        <Completed>
            <SubHeading>Completed</SubHeading>
            <TodoListCompleted>
                {
                    completedItems.map(item=>(
                        <TodoitemCompleted>
                            <Doneitem>
                                <Done src={require('../../assets/tick-green.svg').default } alt="Revert" />
                            </Doneitem>
                            <TodoworksDone>1,Buy 1kg Tomato</TodoworksDone>
                            <ReDoImg>
                                <ReDo src={require('../../assets/revert.svg').default } alt="Revert"  />
                            </ReDoImg>
                            <DeleteButtonCompleted>
                            <DeleteCompleted src={require('../../assets/delete.svg').default } alt="Delete" />
                            </DeleteButtonCompleted>
                        </TodoitemCompleted>
                    ))
                }
            </TodoListCompleted>
        </Completed>
        
    </Container>
  )
}
const Container=styled.div` 
    margin:0 auto;
    width: 45%;
    border-left:1px solid #b5b5b5;
    border-right:1px solid #8888;
    height: 100vh;
    padding: 0px 100px ;
    align-items: center;
    `;
const Heading=styled.h1`
    font-size:40px;
    text-align:center;
`;
const Donecontainer=styled.div``;
const SubHeading=styled.h2`
    font-size:20px;
    color:#040241;
    margin:20px auto;
    `;
const TodoList=styled.ul`
    width:80%;
    margin :0 auto;`;
const Todoitem=styled.li`
     display:flex;
    align-items:center;
    justify-content: space-between;
`;
const DoneitemRound=styled.div`
    width:24px;
    height:24px;
    border-radius:50%;
    border:2px solid #000;`;
const Done=styled.img`
    display:block;
    width:100%;
    height:20px;`;
const Todoworks=styled.h3`
    width: 70%;
`;
const DeleteButton=styled.button`
    width: 5%;
    background: none;
    border: none;
    cursor: pointer;
`;
const Delete=styled.img`
    width: 100%;
    display: block;
`;
const NewTask=styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    position: relative;
`;
const AddDiv=styled.div`
    width:15px;
    position:absolute;
    left: 60PX;
    `;
const Plus=styled.img` 
    display:block;
    width:100%;
    `;
const NewTaskInput=styled.input`
    margin:20px 0;
    padding:8px 25px;
    width:65%;
    color: #000;

    `;
const AddNewButton=styled.button`
    width: 70px;
    padding: 10px;
    font-size: 13px;
    color: #fff;
    background-color: #040241;
    border: none;
`;
const Completed=styled.div``;
const TodoListCompleted=styled.ul`
    width:80%;
    margin:0 auto;
    `;
const TodoitemCompleted=styled.li`
    display:flex;
    align-items:center;
    justify-content: space-between;
    `;
const Doneitem=styled.div`
    width:24px;
    height:24px;
    border-radius:50%;
    border:2px solid #84dec1;`;
const TodoworksDone=styled.h3`
    width:65%;
    color:#64d7b5`;
const ReDoImg=styled.div`
    width:20px;`;
const ReDo=styled.img`
    display:block;
    width:100%;`;
const DeleteButtonCompleted=styled.button`
    width: 5%;
    border: none;
    background: none;
    cursor: pointer;

`;
const DeleteCompleted=styled.img`
    width: 100%;
    display: block;
`;






export default Todoapp;