const Comment = ({comment}) => {
    const {id, name, body, email} = comment;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
            <hr/>
        </div>
    );
};

export {Comment};