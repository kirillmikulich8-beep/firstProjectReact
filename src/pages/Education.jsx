import MyComponent from "../components/MyComponent"
import SampleBlock from "../components/SampleBlock"
import ComponentUseState from "../components/ComponentUseState"
import SampleBlockUseState from "../components/SampleBlockUseState"
import Counter from "../components/Counter"
import MyList from "../components/MyList"

function Education() {

    return(
        <div className="flex flex-col gap-10">
        <h1>Обучающая страница </h1>
        <MyComponent/>
        <SampleBlock
        title={"Заголовок"}
        description={"Описание"}
        />
        <ComponentUseState/>
        <SampleBlockUseState/>
        <Counter/>
        <MyList/>
        </div>
    )
}
export default Education