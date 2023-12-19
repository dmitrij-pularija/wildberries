import Flatpickr from 'react-flatpickr';
import { Russian } from "flatpickr/dist/l10n/ru.js"
import css from "./Report.module.css";
import "flatpickr/dist/flatpickr.css";

const Report = () => {
  return (
    <>
      <div className={css.wrapper}>
        <h1 className={css.title}>
          Формирование детализации отчетов WB в один файл
        </h1>
        <div className={css.forma}>
        <div className={css.inputWrapper}>    
        <label className={css.label}>Выберите период выборки:</label>  
          <div className={css.dateWrapper}>
          <Flatpickr
                required
                id='startDate'
                name='startDate'
                className={css.inputDate}
                // onChange={date => setValue("startDate", date)}
                // value={field.value}
                options={{
                  enableTime: false,
                  locale: Russian,
                  dateFormat: 'd.m.Y'
                }}
              />
            <div>&#8212;</div>
            <Flatpickr
                required
                id='endDate'
                name='endDate'
                className={css.inputDate}
                // onChange={date => setValue("startDate", date)}
                // value={field.value}
                options={{
                  enableTime: false,
                  locale: Russian,
                  dateFormat: 'd.m.Y'
                }}
              />
          </div>
          </div>  
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
