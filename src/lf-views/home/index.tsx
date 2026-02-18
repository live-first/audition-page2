'use client'

import { EllipseButton } from '@/lf-components/Button/EllipseButton'
import { EmphasisSlash } from '@/lf-components/EmphasisSlash'
import { Heading } from '@/lf-components/Heading'
import { Panel } from '@/lf-components/Panel'
import { Container } from '@mui/material'
import { IoMdCheckmark, IoMdArrowRoundDown } from 'react-icons/io'
import { PropsWithChildren } from 'react'
import SlideUpAnimation from '@/lf-components/animation/slideUpAnimation'
import { Marker } from '@/lf-components/Marker'
import './style.css'
import { Img } from '@/lf-components/Image'
import xLogo from '../../image/x-logo.png'
import instaLogo from '../../image/Instagram-logo.png'
import Link from 'next/link'
import { LetterPanel } from '@/lf-templates/letterPanel'
import matsuri from '@/image/咲真まつり.png'
import hikaru from '@/image/佐藤ひかる.png'
import mio from '@/image/橘みお.png'
import koko from '@/image/櫻葉ここ.png'
import hcpl from '@/image/白地図プロローグ.jpg'
import ttLogo from '@/image/tiktok-logo.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export const HomeView = () => {
  return (
    <div>
      <Container maxWidth='md' style={{ padding: 0 }}>
        <div className='flex flex-col gap-4 px-4 py-12 bg-[#bde2ff6f]'>
          <Theme />
          <SlideUpAnimation>
            <Title />
          </SlideUpAnimation>
          <EntryLine />
          <div className='flex flex-col gap-6 py-4'>
            <SlideUpAnimation>
              <DeadLine />
            </SlideUpAnimation>
            <SlideUpAnimation>
              <AuditionOutline />
            </SlideUpAnimation>
            <SlideUpAnimation>
              <Eligibility />
            </SlideUpAnimation>
            <SlideUpAnimation>
              <Schedule />
            </SlideUpAnimation>
            <SlideUpAnimation>
              <Costume />
            </SlideUpAnimation>
            <SlideUpAnimation>
              <Member />
            </SlideUpAnimation>
            <SlideUpAnimation>
              <EntryMethod />
            </SlideUpAnimation>
          </div>
        </div>
      </Container>
    </div>
  )
}

const Theme = () => {
  return (
    <div className='flex justify-between py-4'>
      <SlideUpAnimation className='flex'></SlideUpAnimation>
    </div>
  )
}

const Title = () => {
  return (
    <div className='text-decoration text-center text-2xl md:text-5xl font-bold'>
      白地図プロローグ
      <br />
      メンバーオーディション
    </div>
  )
}

const EntryLine = () => {
  const OnLine = () => {
    window.open('https://lin.ee/D3AVSg1', '_blank')
  }

  return (
    <div>
      <div className='text-default text-center font-bold'>▼エントリー、ご質問などはこちらから▼</div>
      <div className='flex justify-center'>
        <EllipseButton
          className='border-2 border-[#bfffd3] bg-[#00cc41] font-bold text-2xl items-center shadow-2xl text-white w-2/3'
          onClick={OnLine}
        >
          公式ライン
        </EllipseButton>
      </div>
    </div>
  )
}

const DeadLine = () => {
  return (
    <LetterPanel title='募集締切'>
      <div className='flex flex-col justify-center gap-2'>
        <EmphasisSlash>
          <span className='font-bold text-2xl'>2026 / 3 / 22（日）</span>
        </EmphasisSlash>
      </div>
    </LetterPanel>
  )
}

const AuditionOutline = () => {
  const Section = ({ label, children }: PropsWithChildren<{ label: string }>) => {
    return (
      <div className='flex flex-col gap-1'>
        <Heading tag={5} label={label} />
        <div className='flex flex-col pl-2'>{children}</div>
      </div>
    )
  }

  return (
    <LetterPanel title='募集内容'>
      <div className='flex flex-col gap-6'>
        <Section label='🎵グループについて'>
          <div>
            <Marker theme='yellow'>白地図プロローグ</Marker>は
            <Marker theme='pink'>
              「完成された物語」ではなく「始まり続ける物語」を届けるために。
            </Marker>
            をコンセプトに東京拠点で活動しているアイドルグループです。2026年2月1日からプレデビューとして活動を開始しています。
          </div>
          <div className='mt-4'>
            この度、よりグループの強化、売れるグループになるためにメンバーを募集させていただく運びとなりました。
          </div>
          <div className='mt-4'>
            白地図プロローグは<Marker theme='yellow'>3年以内にTOKYO IDOL FESTIVAL出演</Marker>
            を目指しています。
          </div>
          <div className='mt-4'>
            アイドルとして<Marker theme='yellow'>上を目指したい！成長したい！</Marker>
            という熱意ある方、アイドル活動を真剣に取り組みたい方を募集しています！
          </div>
          <div className='mt-4'>お披露目は2026年5月中を予定しています。</div>
          <Img src={hcpl.src} alt='白地図プロローグ' />
          <Heading tag={6} label='SNS' />
          <div className='flex gap-6'>
            <Link href='https://hakuchizu-prologue.com' className=''>
              オフィシャルサイト
            </Link>
            <Link href='https://x.com/HCPL_official' target='_blank' className='w-16'>
              <Img cName='h-6' src={xLogo.src} alt='x-logo' notNext />
            </Link>
            <Link href='https://www.tiktok.com/@hcpl_official' target='_blank' className='w-16'>
              <Img cName='h-6' src={ttLogo.src} alt='tiktok-logo' notNext />
            </Link>
          </div>
        </Section>
        <Section label='🎵運営会社について'>
          <div>
            <Marker theme='yellow'>合同会社LIVE FIRST</Marker>は<Marker theme='yellow'>来桜</Marker>
            によって立ち上げられた新規の事務所となっています。前身にグループの立ち上げ経験や業界に5年以上関わっている運営スタッフが集まって立ち上げられた組織のため、運営基盤やノウハウが蓄積されています。
          </div>
          <div>
            ライブを通して、楽しさと感動を届けられるグループにしていきたいと思っています。また、メンバーにとっての成長環境を作っていけたらと思っています。
          </div>
        </Section>
        <Section label='🎵運営の特徴'>
          <div className='flex flex-col gap-2'>
            <div>
              <Marker theme='orange'>特徴1</Marker>：
              <span className='border-b-2 border-pink-300'>
                女性Pおよび女性スタッフ中心の運営体制
              </span>
            </div>
            <div>
              <Marker theme='orange'>特徴2</Marker>：
              <span className='border-b-2 border-pink-300'>大型ライブイベント制作実績あり</span>
            </div>
            <div>
              <Marker theme='orange'>特徴3</Marker>：
              <span className='border-b-2 border-pink-300'>スタッフ全員20代！</span>
            </div>
            <div>万全な体制で活動をサポートします！一緒に成長して上を目指しましょう！</div>
          </div>
        </Section>
        <Section label='🎵オーディション参加費'>
          <div>ありません</div>
          <div className='text-xs pl-2'>※但し、面接会場までの交通費のみご負担頂きます。</div>
        </Section>
        <Section label='🎵報酬体系'>
          <div>歩合制（当社規定のバック率）</div>
          <div>交通費全額支給</div>
          <div>レッスン、衣装など活動にかかる費用の負担はありません。</div>
        </Section>
      </div>
    </LetterPanel>
  )
}

const Eligibility = () => {
  return (
    <LetterPanel title='応募資格'>
      <div className='flex flex-col gap-6'>
        <div>
          <div className='flex'>
            <IoMdCheckmark style={{ transform: 'translateY(2px)' }} />
            14〜26歳の女性
          </div>
          <div className='text-sm'>　　※未成年者は親権者の同意が必要</div>
          <div className='flex'>
            <IoMdCheckmark style={{ transform: 'translateY(2px)' }} />
            心身ともに健康な方
          </div>
          <div className='flex'>
            <IoMdCheckmark style={{ transform: 'translateY(2px)' }} />
            主に都内で活動ができる方
          </div>
          <div className='flex'>
            <IoMdCheckmark style={{ transform: 'translateY(2px)' }} />
            意欲と向上心のある方
          </div>
          <div className='flex'>
            <IoMdCheckmark style={{ transform: 'translateY(2px)' }} />
            経験不問
          </div>
          <div className='flex'>
            <IoMdCheckmark style={{ transform: 'translateY(2px)' }} />
            他事務所やレコード会社と契約のない方
          </div>
        </div>
      </div>
    </LetterPanel>
  )
}

const Schedule = () => {
  return (
    <LetterPanel title='オーディションスケジュール'>
      <div className='flex flex-col gap-6'>
        <div>
          <div className='font-bold text-default'>1次審査：書類審査</div>
          <div className='text-sm pl-4'>公式ラインに必要事項をお送りください。</div>
          <div className='text-sm pl-4'>
            その内容を元に判断し、1週間以内に結果をご連絡いたします。
          </div>
          <div>
            <IoMdArrowRoundDown />
          </div>
          <div className='font-bold text-default'>2次審査：面接（原則対面（都内））</div>
          <div className='text-sm pl-4'>1次選考通過の方に別途ご案内いたします。</div>
          <div>
            <IoMdArrowRoundDown />
          </div>
          <div className='font-bold text-default'>最終審査：ダンス、歌唱</div>
          <div className='text-sm pl-4'>2次面接時にご案内いたします。</div>
        </div>
      </div>
    </LetterPanel>
  )
}

const Member = () => {
  return (
    <LetterPanel title='メンバー紹介'>
      <div className='flex w-full'>
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          pagination={{ clickable: false, el: '#pagination' }}
          mousewheel={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          speed={500}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            992: {
              slidesPerView: 2.2,
              spaceBetween: 30,
            },
            1600: {
              slidesPerView: 3.3,
              spaceBetween: 30,
            },
            1800: {
              slidesPerView: 4.3,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <Img src={hikaru.src} alt='佐藤ひかる' />
          </SwiperSlide>
          <SwiperSlide>
            <Img src={koko.src} alt='櫻葉ここ' />
          </SwiperSlide>
          <SwiperSlide>
            <Img src={mio.src} alt='橘みお' />
          </SwiperSlide>
          <SwiperSlide>
            <Img src={matsuri.src} alt='咲真まつり' />
          </SwiperSlide>
        </Swiper>
      </div>
    </LetterPanel>
  )
}

const EntryMethod = () => {
  return (
    <LetterPanel title='応募方法'>
      <div className='flex flex-col gap-6'>
        <EntryLine />
      </div>
    </LetterPanel>
  )
}

const Costume = () => {
  return (
    <Panel size='xl'>
      <div className='flex flex-col gap-6'>
        <Heading tag={4} label='衣装デザイン' />
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <Heading tag={5} label='衣装製作者さんのご紹介' />
            <div className='pl-4 flex flex-col gap-4'>
              <p className='text-lg font-bold'>yuumi mano さん</p>
              <div className='flex gap-3'>
                <Link href='https://x.com/m_noooom_/' className='w-12'>
                  <Img src={xLogo.src} alt='x' />
                </Link>
                <Link href='https://www.instagram.com/y___i____/' className='w-12'>
                  <Img src={instaLogo.src} alt='instagram' />
                </Link>
              </div>
              <div className=''>
                多数の人気なアイドルグループの衣装を製作しており、実績のある方にご依頼させていただきました。
              </div>
            </div>
          </div>
        </div>
      </div>
    </Panel>
  )
}
