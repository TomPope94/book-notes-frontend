import React from 'react'

const Element = ({attributes, children, element}) => {
    switch (element.type) {
        default: 
            return (<p {...attributes}>{children}</p>)
    }
}

export default Element;