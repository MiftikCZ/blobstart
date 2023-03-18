import config from "../../public/config.json"

export default function () {
    let i = config.colors.start
    return <div class="links">
        {config.links.map(e => {
            i++
            return <div class="container" style={`--hue:${config.colors.step*i};`}>
                <span class="title">{e[0]}</span>
                {//@ts-ignore
                e[1].map(x => {
                    return <a href={x[1]} class="link" target="_blank">{x[0]}</a>
                })
                }
            </div>
        })}
    </div>
}