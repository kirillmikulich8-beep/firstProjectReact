import MyComponent from "../components/MyComponent"
import SampleBlock from "../components/SampleBlock"




function Education() {

    return(
        <div className="flex flex-col gap-10">
        <h1>Обучающая страница </h1>
        <MyComponent/>
        <SampleBlock
        title={"Заголовок"}
        description={"Описание"}
        />
        </div>
    )
}
export default Education