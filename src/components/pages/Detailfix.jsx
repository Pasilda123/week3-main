import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { editTodo } from "../redux/modules/todosSlice";
import { useDispatch } from "react-redux";
import { FaTools } from "react-icons/fa";
import styled from "styled-components";

const Detailfix = ({data}) => {
    const dispatch = useDispatch();
    const [input, setInput] = useState({title:data.title, content:data.content});
    useEffect(()=>{setInput(data)}, [data])
    const [isedit, setIsEdit] = useState(false);

    const updateTodos = (e) => {
        e.preventDefault();
        dispatch(editTodo({ id:data.id, body : {title:input.title, content:input.content}}))
        setInput({ id:Date.now(), title:"", content:"" })
        setIsEdit(prev => !prev);
    }
    
    const handleChangeTitle = (e) => {
        setInput((current) => ({...current, title: e.target.value}))
    }

    const handleChangeContent = (e) => {
        setInput((current) => ({...current, content: e.target.value}))
    }

    const handleClickEdit = () => {
        setIsEdit((current) => !current);
      };
  return (
    <div>
      {!isedit ? (
        <>
        </>
      ) : (
        <>
        <FixGroup>
          <label>제목<input onChange={handleChangeTitle} value={input.title}/></label>
          <div>
          <label>내용<input onChange={handleChangeContent} value={input.content}/></label>
          </div>
          <Button style={{color: "#20c997", backgroundColor:"white"}} variant="text" onClick={updateTodos}>완료</Button>
        </FixGroup>
        </>
      )}
      <Button onClick={handleClickEdit}
      style={{
        color: "#20c997",
        cursor: "pointer",
        marginLeft:"84%",
        backgroundColor:"white"
      }}>
        <FaTools size={"20px"}/>
      </Button>
    </div>
  );
};

export default Detailfix;

const FixGroup = styled.div`
    font-weight: bold;
    text-align: center;
`;


