import React from 'react';
import './profile-status.css';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, prevState) {

        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
        console.log('componentDidUpdate');
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {

        const content = this.state.editMode
            ? <input value={this.state.status}
                     onBlur={ this.deactivateEditMode }
                     onChange={this.onStatusChange}
                     autoFocus={true}/>
            :  <span onClick={ this.activateEditMode }>{this.props.status}</span>;

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
}

export default ProfileStatus;