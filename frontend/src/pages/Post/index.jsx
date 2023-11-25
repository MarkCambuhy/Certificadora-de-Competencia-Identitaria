import styles from "./index.module.css";
import pencil from "../../assets/pencil-alt.png"
import share from "../../assets/share.png"
import trash from "../../assets/trash.png"

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Post = () => {
    const Comentarios = [{id: 1, content: "Damn!! This line of thought is unique never thought like this before I must write my experience of applying your thought in one of my medium articles", author: "Pedro"}, {
        id: 2,
        content: "asdasdasdasdasdasdasd",
        author: "Pedro"
    }]

    return (
        <div>
            <Header />
            <div className={styles.body}>
                <div className={styles.conteiner}>
                    <div className={styles.bodyTitle}>
                        Lorem ipsum dolor sit amet consectetur. Odio aenean amet risus et lectus.
                    </div>
                    <div className={styles.bodyPost}>
                        <div className={styles.bodyPostText}>
                            Mark Cambuhy • 5 min read • Nov 12, 2023
                        </div>
                        <div className={styles.bodyPostIcon}>
                            <img src={share}/>
                            <img src={pencil}/>
                            <img src={trash}/>
                        </div>
                    </div>
                    <div className={styles.imgPost}>
                        <img id={styles.img}
                             src={"data:image/jpeg;base64,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"}/>
                    </div>
                    <div className={styles.textPost}>
                        Lorem ipsum dolor sit amet consectetur. Pharetra tristique leo tristique vitae in risus. A
                        habitasse magna tortor sed tincidunt sed sed tortor. Facilisis viverra non commodo at at at
                        libero. Ornare velit adipiscing eleifend egestas. Quis est sociis placerat risus vel nullam
                        etiam. A pellentesque ut at odio a sit. Faucibus nascetur natoque scelerisque praesent
                        pellentesque viverra massa. Eget in venenatis elementum lorem turpis volutpat egestas. Volutpat
                        luctus elementum purus cras.
                        Imperdiet vestibulum sapien lacus luctus pellentesque tristique. Risus porttitor cursus lorem
                        lorem habitant lorem fermentum accumsan. Tellus eu donec risus diam lobortis dignissim consequat
                        elit turpis. Morbi odio cras aliquet tincidunt lorem nibh dictumst vivamus aliquam. Morbi quis
                        at vitae viverra enim velit maecenas. Sed aliquam vel tempus cras metus tincidunt. Enim nullam
                        gravida massa luctus laoreet turpis justo.
                        Felis urna sit in justo sed elementum viverra netus. In amet malesuada ac in arcu tellus blandit
                        feugiat adipiscing. Lorem pellentesque lacus fames elementum. Aliquet arcu enim volutpat egestas
                        tempus. Sollicitudin interdum leo velit justo lorem mauris. Netus nascetur congue et quam augue
                        sed at. Semper eget egestas pretium est lectus. Diam mauris non nunc amet mattis pharetra
                        pharetra at. Vel est id lacus nunc. Eget non amet sit urna pellentesque magna felis tristique
                        quisque. Eget nunc sit interdum in.
                        Lorem ipsum dolor sit amet consectetur. Pharetra tristique leo tristique vitae in risus. A
                        habitasse magna tortor sed tincidunt sed sed tortor. Facilisis viverra non commodo at at at
                        libero. Ornare velit adipiscing eleifend egestas. Quis est sociis placerat risus vel nullam
                        etiam. A pellentesque ut at odio a sit. Faucibus nascetur natoque scelerisque praesent
                        pellentesque viverra massa. Eget in venenatis elementum lorem turpis volutpat egestas. Volutpat
                        luctus elementum purus cras.
                        Imperdiet vestibulum sapien lacus luctus pellentesque tristique. Risus porttitor cursus lorem
                        lorem habitant lorem fermentum accumsan. Tellus eu donec risus diam lobortis dignissim consequat
                        elit turpis. Morbi odio cras aliquet tincidunt lorem nibh dictumst vivamus aliquam. Morbi quis
                        at vitae viverra enim velit maecenas. Sed aliquam vel tempus cras metus tincidunt. Enim nullam
                        gravida massa luctus laoreet turpis justo.
                        Felis urna sit in justo sed elementum viverra netus. In amet malesuada ac in arcu tellus blandit
                        feugiat adipiscing. Lorem pellentesque lacus fames elementum. Aliquet arcu enim volutpat egestas
                        tempus. Sollicitudin interdum leo velit justo lorem mauris. Netus nascetur congue et quam augue
                        sed at. Semper eget egestas pretium est lectus. Diam mauris non nunc amet mattis pharetra
                        pharetra at. Vel est id lacus nunc. Eget non amet sit urna pellentesque magna felis tristique
                        quisque. Eget nunc sit interdum in.
                    </div>
                    <div className={styles.linhaPost}>
                        <span className={styles.spanPost}>
                            Cometários
                        </span>
                    </div>
                    <div>
                        {Comentarios.map((post) => (
                            <div className={styles.coteinerComentario} key={post.id}>
                                <div className={styles.comentarioPost}>
                                    <div className={styles.postContent}>
                                        <span className={styles.info}>
                                            {post.author}
                                        </span>
                                        <span className={styles.infoTime}>
                                            • Nov 12, 2023
                                        </span>
                                        <p className={styles.postContentText}>
                                            {post.content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className={styles.conteinerInput}>
                            <input type="text" className={styles.input} placeholder="Digite seu comentário..."></input>
                            <button id={styles.botao}>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.2417 0.147688L0.609861 12.3715C-0.273928 12.8469 -0.161624 13.9989 0.717283 14.3463L5.90771 16.3851L19.936 4.81046C20.2046 4.58647 20.5854 4.92932 20.356 5.18988L8.59326 18.6068V22.2867C8.59326 23.3656 9.98486 23.7907 10.6685 23.009L13.769 19.4753L19.853 21.8616C20.5464 22.1359 21.3374 21.729 21.4644 21.0296L24.98 1.28138C25.146 0.35797 24.0864 -0.309447 23.2417 0.147688Z" fill="white"/>
                            </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Post;