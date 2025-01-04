export const HelloWorld = ( {user, id, title = 'Hello World!'} ) => {
    // const name = 'Anna';

    console.log(title);

    return (        
        <>
            <h1>{title}</h1>
            <p>Welcome user {user} with the id {id + 10}</p>
        </>
    );
}