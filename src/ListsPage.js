import List from "./ListDetails";
import React, { useState , useEffect} from "react";
import {MainChildWrapper} from './App.js' ;
import LoadingComponent from "./LoadingComponent";

const ListsPage = () => {
    const [lists, setLists] = useState([]);

    const updateLists = () => {
        fetch("http://localhost:8888/api/lists")
            .then(res => res.json())
            .then(items => setLists(items))
    };

    useEffect(() => {
        updateLists();
        setInterval(()=> updateLists(), 10000)
    }, []);

    return (
        <MainChildWrapper>
            {
                lists.length ? lists.map((item) => (
                    <List scale="10" item={item}/>
                )) : <LoadingComponent />
            }
        </MainChildWrapper>
    )

};

export default ListsPage;