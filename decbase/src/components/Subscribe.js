import { useForm } from 'react-hook-form';

const Subscribe = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = (data) => {
    localStorage.setItem('name', 'Oleksandra')
    if (localStorage.getItem('name') === data.firstName) {
        var popup = document.getElementById("popup");
        popup.classList.add("show");
        setTimeout(()=>popup.classList.remove("show"), 5000)
    } else 
    localStorage.setItem('firstName', data.firstName);
    localStorage.setItem('surName', data.surName);
    localStorage.setItem('email', data.email);
    reset();
  };

  return (
    <section id='subscribe' className="container">
        <div id="popup" className="popup">
            <p className='popup-text'>Тільки сьогодні!!!<br/> Всім <span>Олександрам</span> знижка <span>120%</span></p>
            <div className="hypnotic"></div>
        </div>
      <div className="subscribe">
        <h2 className='subscribe__title'>DON’T FORGET TO SIGN UP</h2>
        <hr/>
        <h3 className='subscribe__desc'>
          Find out early about all upcoming promotions and new product releases with our
          newsletter.
        </h3>
        
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div className="form-wrap">
            <div className="subscribe__form-first">
              <input
                {...register('firstName', {
                  pattern: /^[A-Z][a-z]+$/,
                  required: 'The field is required',
                })}
                className={!errors?.firstName ? 'form__input' : 'form__input__error'}
                type="text"
                placeholder = 'Enter your name.....'
              />
            </div>

            <div className="subscribe__form-first">
              <input
                {...register('surName', {
                  pattern: /^[A-Z][a-z]+$/,
                  required: 'The field is required',
                })}
                className={!errors?.surName ? 'form__input' : 'form__input__error'}
                type="text"
                placeholder = 'Enter your surname.....'
              />
            </div>
          </div>
          
          <input
            {...register('email', {
              pattern:
                /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/,
              required: 'The field is required',
            })}
            className={errors?.email ? 'form__input_email__error' : 'form__input_email'}
            type="email"
            placeholder = 'Enter your e-mail.....'
          />
          

          <input
            disabled={!isValid}
            className={isValid ? 'form__button' : 'form__button-disable'}
            type="submit"
            value={'SUBSCRIBE'}
          />
        </form>
      </div>
    </section>
  );
}

export default Subscribe;