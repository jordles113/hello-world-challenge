import React from 'react'

const ProjectHeader = (props) => {
    console.log(props.group)
    
    return (
        <div>
            <h1 className='heading-1'>{props.type} Projects</h1>
            {props.type  === 'independent' ? <span className='heading-2 heading-2--blue'>Complete {props.group.required} of {props.group.projects.length}</span> : props.type}
            <h2 className='heading-2'>{props.group.title}</h2>
        </div>
    )
}

export default ProjectHeader
