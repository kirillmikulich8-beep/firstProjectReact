import MyComponent from "../components/MyComponent"
import SampleBlock from "../components/SampleBlock"
import ComponentUseState from "../components/ComponentUseState"
import SampleBlockUseState from "../components/SampleBlockUseState"
import Counter from "../components/ui/Counter"
import MyList from "../components/MyList"
import OnChangeComp from "../components/ui/OnChangeComp"
import { useEffect } from "react"
import Users from "../components/Users"


function Education() {
    useEffect(()=>{
      console.log("Страница Education загрузилась")
    }, [])

    return(
        <div className="flex flex-col gap-10">
        <h1>Обучающая страница </h1>
        {/* <Users/> */}
        <MyComponent/>
        <SampleBlock
        title={"Заголовок"}
        description={"Описание"}
        />
        <ComponentUseState/>
        <SampleBlockUseState/>
        <Counter/>
        <MyList/>
        <OnChangeComp/>
        </div>
    )
}
export default Education