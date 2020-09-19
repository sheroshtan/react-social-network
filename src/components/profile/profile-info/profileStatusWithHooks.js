import React, {useEffect, useState} from 'react';
import './profile-status.css';

const ProfileStatusWithHooks = (props) => {

    const [ editMode, setEditMode ] = useState(false);
    const [ status, setStatus ] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onChangeStatus = (e) => {
        setStatus(e.currentTarget.value);
    }

    const content = editMode
        ? <input autoFocus={true}
                 onBlur={deactivateEditMode}
                 value={status}
                 onChange={onChangeStatus}/>
        : <span onClick={activateEditMode}>{props.status}</span>;

    return (
        <>
            <div className="profile-status">
                {
                    content
                }
            </div>
        </>
    )

}

export default ProfileStatusWithHooks;