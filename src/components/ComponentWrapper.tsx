import React from 'react';
type ComponentWrapperProps = {
    children: React.ReactNode
}

export const ComponentWrapper = (props: ComponentWrapperProps) => {
  return (
    <div>
        {props.children}
    </div>
  )
}
