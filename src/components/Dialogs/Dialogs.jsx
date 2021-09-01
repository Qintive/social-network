import React from 'react'
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message'
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../validators/validators';
import { Textarea } from '../common/Preloader/FormsControls/FormsControls';



const Dialogs = (props) => {

    let state = props.messagesPage;

    let nameElement = state.nameData.map(d => <DialogItem name={d.name} id={d.id} />)

    let messageElement = state.messageData.map(m => <Message message={m.message} />)


    let addNewMessage = (value) => {
        props.onSendMesage(value.newMessageBody)
        value.newMessageBody = ''
    }

    if (props.isAuth === false) return <Redirect to={'/login'} />

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {nameElement}
            </div>
            <div>
                <div className={classes.messages}>
                    {messageElement}
                </div>
                <div>
                    <AddMessageFormRedux onSubmit={addNewMessage} />
                </div>

            </div>
        </div>
    )
}

const maxLength10 = maxLengthCreator(10)


const AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={Textarea} name='newMessageBody'
                placeholder='Введите сообщение'
                validate={[required, maxLength10]}/></div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)

export default Dialogs;
