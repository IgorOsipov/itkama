import React from 'react';

class ProfileStatus extends React.Component{
    state = {
        editMode: false
    }

    toggleEditMode = () => {
        this.setState({editMode: !this.state.editMode});
    }

    render(){
        return(
            <>
                {!this.state.editMode ? 
                    <p onClick={this.toggleEditMode}>{this.props.status}</p> :
                    <div onBlur={this.toggleEditMode}> <input autoFocus={true} type="text" value={this.props.status}/> </div>
                }
            </>
        )
    }
}

export default ProfileStatus;