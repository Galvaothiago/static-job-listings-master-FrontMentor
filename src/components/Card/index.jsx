import { CardContainer, ContainerFeatured, ContainerLeft, ContainerNew, ContainerRight } from "./styles";

export function Card({ data, onCreate}) {
    const { languages, tools } = data
    const languagesAndTools = [...languages, ...tools]


    return (
        <CardContainer $border={data.featured}>
            <ContainerLeft>
                <img src={data.logo} alt={`${data.company} Logo`} />
                <div>
                    <div>
                        <p>{data.company}</p>
                        <div>
                            { data.new && <ContainerNew>New!</ContainerNew>}
                            { data.featured && <ContainerFeatured>Featured</ContainerFeatured>}
                        </div>
                    </div>
                    <h1>{ data.position }</h1>
                    <ul>
                        <li>{ data.postedAt }</li>
                        <li>{ data.contract }</li>
                        <li>{ data.location }</li>
                    </ul>
                </div>
            </ContainerLeft>

            <ContainerRight>
                { languagesAndTools.map( (item, index) => <p key={`${index}-${item}`} onClick={ () => onCreate(item) }>{item}</p> ) }
            </ContainerRight>
        </CardContainer>
    )
}