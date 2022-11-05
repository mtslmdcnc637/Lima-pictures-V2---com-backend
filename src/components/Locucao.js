import style from "./css/Locucao.module.css";
function Locucao() {
  return (
    <>
      <div className={style.heroimage}>
        <h1>Locução</h1>
        <p>
          Veja abaixo alguns vídeos que eu narrei
        </p>
      </div>
      <div className={style.content}>
      <audio controls>
        <source src="viper.mp3" type="audio/mp3"/>
        <source src="viper.ogg" type="audio/ogg"/>
        <p>Audio narrado</p>
      </audio>
      <audio controls>
        <source src="viper.mp3" type="audio/mp3"/>
        <source src="viper.ogg" type="audio/ogg"/>
      </audio>
      <audio controls>
        <source src="viper.mp3" type="audio/mp3"/>
        <source src="viper.ogg" type="audio/ogg"/>
        <p>Audio narrado</p>
      </audio>
      <audio controls>
        <source src="viper.mp3" type="audio/mp3"/>
        <source src="viper.ogg" type="audio/ogg"/>
      </audio>
      <audio controls>
        <source src="viper.mp3" type="audio/mp3"/>
        <source src="viper.ogg" type="audio/ogg"/>
        <p>Audio narrado</p>
      </audio>
      <audio controls>
        <source src="viper.mp3" type="audio/mp3"/>
        <source src="viper.ogg" type="audio/ogg"/>
      </audio>

      </div>
    </>
  );
}
export default Locucao;
