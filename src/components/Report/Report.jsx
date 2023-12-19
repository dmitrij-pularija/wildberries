import css from "./Report.module.css";

const Report = () => {
  return (
    <>
      <div className={css.wrapper}>
        <h1 className={css.title}>
          Формирование детализации отчетов WB в один файл
        </h1>
        <div className={css.forma}>
          <div className={css.inputWrapper}>
            <label className={css.label}>Введите токен Статистики:</label>
            <input name="Token" className={css.inputToken} type="text" />
          </div>
          <button type="button" className={css.button} onClick={() => {}}>
            Скачать одним файлом
          </button>
        </div>
      </div>
    </>
  );
};

export default Report;
