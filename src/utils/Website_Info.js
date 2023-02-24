const Website_info = (id) =>{
    console.log('ID:',id.prop);
    if (id.prop == 0){
    console.log('im in');
    return(
        <>
            <h2>Website Link</h2>
            <a target="_blank" href="https://imaginative-donut-c608b3.netlify.app">Millionaire Game</a>
            <h1>GitHub Link</h1>
            <a target="_blank" href="https://github.com/jj252/react_project_millionaire.git">Git Hub Link</a>
            
        </>
    )
    }
    else if (id.prop == 1){
        console.log('im in');
        return(
            <>
                <h2>Website Link</h2>
                <a target="_blank" href="https://bespoke-kitten-95dba6.netlify.app/">Find The Imposter</a>
                <h1>GitHub Link</h1>
                <a target="_blank" href="https://github.com/jj252/htmlcssjavascript_project.git">Git Hub Link</a>
                
            </>
        )
        }
        else if (id.prop == 2){
            console.log('im in');
            return(
                <>
                    <h2>Website Link</h2>
                    <a target="_blank" href="https://jade-sable-ab57ab.netlify.app/">Bootstrap and JQuery Project</a>
                    <h1>GitHub Link</h1>
                    <a target="_blank" href="https://github.com/jj252/bootstrap_project.git">Git Hub Link</a>
                    
                </>
            )
            }
            else if (id.prop == 3){
                console.log('im in');
                return(
                    <>
                        <h1>GitHub Link</h1>
                        <a target="_blank" href="https://github.com/jj252/python_project_millionaire.git">Git Hub Link</a>
                        
                    </>
                )
                }
}

export default Website_info;

