import React from 'react'
import Input from './input'
interface HelpModelProps{
text:string,
onChange:any,
value:any
}

type FC = React.FC<HelpModelProps>
//@ts-ignore
const App:FC = (props) => {
return(
    <div>
    <h5
          style={{
            
                fontFamily: "Comic Sans MS, Chalkboard SE",
                marginBottom: 0,
                
              }}
            >
              {props.text}
            </h5>
            <Input
              type={"text"}
              border={"2px solid black"}
              height={18}
              width={300}
              placeholder={""}
              borderRadius={0}
              marginBottom={100}
              onChange={props.onChange}
              value={props.value}
            />
    </div>
)
}

export default App