import style from './index.module.css'

export default function NotFound() {
    return (
        <>

            <div className={style.centered_content}>
                <ul id={style.content_list}>
                    <h1>404</h1>
                    <h2>A página não existe, e talvez nunca existirá xD&nbsp; <br/>
                        Voltar para <a href='/'>home</a>
                    </h2>
                </ul>

            </div>
        </>
    );
}