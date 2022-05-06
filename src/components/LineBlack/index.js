import React, {useState} from 'react';
import './index.css';
import WhiteSquare from '../WhiteSquare'
import BlackSquare from '../BlackSquare'

function LineBlack (props) {
    const [data, setData] = useState('');

    const childToParent = () => {
   
    }
    return <>
        <div className='lines'>
            <WhiteSquare id='1' color='black' propsLine={props.id} childToParent={childToParent}/>
            <WhiteSquare id='2' color='white' propsLine={props.id} childToParent={childToParent}/>
            <WhiteSquare id='3' color='black' propsLine={props.id} childToParent={childToParent}/>
            <WhiteSquare id='4' color='white' propsLine={props.id} childToParent={childToParent}/>
            <WhiteSquare id='5' color='black' propsLine={props.id} childToParent={childToParent}/>
            <WhiteSquare id='6' color='white' propsLine={props.id} childToParent={childToParent}/>
            <WhiteSquare id='7' color='black' propsLine={props.id} childToParent={childToParent}/>
            <WhiteSquare id='8' color='white' propsLine={props.id} childToParent={childToParent}/>
        </div>
    </>
}

export default LineBlack;