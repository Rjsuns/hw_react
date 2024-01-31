const Simpson = ({simpson}) => {
    const {name, surname, age, info, image} = simpson;

    return (
        <div>
            <div>name: {name}</div>
            <div>surname: {surname}</div>
            <div>age: {age}</div>
            <div>info: {info}</div>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Simpson};