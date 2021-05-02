import  React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { icons, pictures } from '../../assets'
import { BlackSection } from '../../BlackSection/BlackSection'
import { BlogCreator } from '../../BlogCreator/BlogCreator'
import '../../global.scss'
import { MyTabs } from '../../MyTabs/MyTabs'
import { Prompt } from '../../Prompt/Prompt'
import { SocialCreator } from '../../SocialCreator/SocialCreator'
import { SvgCreator } from '../../SvgCreator/SvgCreator'
import { Title } from '../../Title/Title'
import styles from './Home.module.scss'

type FormData = {
  email: string;
};

export const Home:React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    clearErrors,
    formState: { errors },
  } = useForm<FormData>()
  const onSubmit = (data:any) => {
    console.log(data)
  }

  useEffect(() => {
    if(errors.email){
      const id = setTimeout(() => {
        clearErrors('email')
      },5000)
      return () => {
        clearTimeout(id)
      }

    }
  },[errors.email,clearErrors])
  const blogs = [
    {
      src: pictures.rect5_7,
      text: `How to choose
    watch for his
    future wife`,
    },
    {
      src: pictures.rect5_8,
      text: `Husband cufflinks:
    7 key rules
    accessory purchases`,
    },
    {
      src: pictures.rect5_9,
      text: `How to choose
    wedding rings
    newlyweds`,
    },
  ]
  return (
    <div className={styles.root}>
      <section className={styles.firstSection}>
        <div className={styles.bottom}>
          <div className="container">
            <Title
              h1={true}
              title={`best products`}
              btnText={`product catalog`}
              btnLink={`catalogs`}
            />
          </div>
          <div className={styles.bottomPicturesContainer}>
            <div className={`container`}>
              <div className={`${styles.bottomPictures}`}>
                {new Array(3).fill(' ').map((e, i) => {
                  return (
                    <div key={i} className={styles.imgContainer}>
                      <img src={pictures.homeBottom} alt="Fine Jewelry" />
                    </div>
                  )
                })}
              </div>
              <div className={`${styles.bottomPictures}`}>
                {new Array(3).fill(' ').map((e, i) => {
                  return (
                    <div key={i} className={styles.imgContainer}>
                      <img src={pictures.homeBottom} alt="Fine Jewelry" />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.secondSection}>
        <div className="container">
          <Title
            clsName={styles.title}
            title={`real beauty is here`}
            subtitle={`events`}
          />
          <MyTabs />
        </div>
      </section>
      <BlackSection>
        <Title
          subtitle={`Not sure what to choose?`}
          title={`Visit our showrooms all over the world`}
          text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut duis tortor vitae pellentesque egestas quam pulvinar. Pellentesque porttitor velit sit pellentesque. Suspendisse donec pretium id dignissim. Dignissim ultrices eget orci viverra. Egestas quis et ut ultrices imperdiet lectus nulla tempus. Pharetra lorem sem purus nisi libero viverra ipsum.`}
          btnText={`our salons`}
          btnLink={`salons`}
        />
      </BlackSection>
      <section className={styles.fourthSection}>
        <div className="container">
          <Title
            clsName={styles.title}
            subtitle={`Not sure what to choose?`}
            title={`Visit our showrooms all over the world`}
          />
        </div>
        <BlogCreator blogs={blogs} />
      </section>
      <section className={styles.fifthSection}>
        <div className="container">
          <SocialCreator>
            <iframe
              src="https://www.youtube.com/embed/lQli9nYcHzo"
              title="First"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div>
              <img src={pictures.gallery_3} alt="" />
              <img src={pictures.gallery_4} alt="" />
            </div>
          </SocialCreator>
          <SocialCreator>
            <div>
              <img src={pictures.gallery_3} alt="" />
              <img src={pictures.gallery_4} alt="" />
            </div>
            <iframe
              src="https://www.youtube.com/embed/lQli9nYcHzo"
              title="Second"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </SocialCreator>
        </div>
      </section>
      <BlackSection>
        <Title
          subtitle={`helpful tips and personalized suggestions`}
          title={`exclusive newsletter`}
        />
        <div className={styles.exclusive}>
          <div className={styles.exclusiveLeft}>
            <div>
              <SvgCreator
                clsName={styles.arrowRight}
                svgHref={`${icons.arrowRight}#arrowRight`}
              />
              <span>personal manager</span>
            </div>
            <div>
              <SvgCreator
                clsName={styles.arrowRight}
                svgHref={`${icons.arrowRight}#arrowRight`}
              />
              <span>Delivery and clearance</span>
            </div>
            <div>
              <SvgCreator
                clsName={styles.arrowRight}
                svgHref={`${icons.arrowRight}#arrowRight`}
              />
              <span>Individual design</span>
            </div>
          </div>
          <div className={styles.exclusiveRight}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.inputContainer}>
                <input placeholder={`email`} {...register('email',{required:true})}/>
                {errors.email && <Prompt text={`please add email to send`}/> }
              </div>
              <button type={`submit`}>submit</button>
            </form>
          </div>
        </div>
      </BlackSection>
    </div>
  )
}
function id(id: any) {
  throw new Error('Function not implemented.')
}

