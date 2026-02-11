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
import costume from '../../image/costume.jpeg'
import xLogo from '../../image/x-logo.png'
import instaLogo from '../../image/Instagram-logo.png'
import Link from 'next/link'
import { LetterPanel } from '@/lf-templates/letterPanel'
import matsuri from '@/image/咲真まつり.png'
import hikaru from '@/image/佐藤ひかる.png'
import mio from '@/image/橘みお.png'
import koko from '@/image/櫻葉ここ.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export const HomeView = () => {
  return (
    <div>
      <Container maxWidth='md' style={{ padding: 0 }}>
        <div className='flex flex-col gap-4 px-4 py-12 bg-[#229fff6f]'>
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
      <div className='flex flex-col whitespace-nowrap gap-1 py-6 mt-6 md:mt-12 text-xl md:text-3xl'>
        <div className='bg-amber-200'>大きいステージを目指して</div>
        <div className='bg-amber-200'>みんなで成長できる</div>
        <div className='bg-amber-200'>アイドルになりたい!!</div>
      </div>
      <SlideUpAnimation className='flex'>
        <div className='vertical-text text-decoration text-5xl md:text-[12rem] justify-end w-full'>
          メンバー
          <br />
          募集中！
        </div>
      </SlideUpAnimation>
    </div>
  )
}

const Title = () => {
  return (
    <div className='text-decoration text-center text-2xl md:text-5xl font-bold'>
      新規アイドルグループ
      <br />
      メンバーオーディション
    </div>
  )
}

const EntryLine = () => {
  const OnLine = () => {
    window.open('https://lin.ee/YmMmBif', '_blank')
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
          <span className='font-bold'>2026 / 3 / 8（日）</span>
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
            <Marker theme='blue'>王道 × 清楚系</Marker>
            のアイドルグループです。ライブは月15本程度予定しています。
          </div>
          <div></div>
          <div>
            本気でアイドルとして<Marker theme='yellow'>上を目指したい</Marker>
            という熱意ある方、アイドル活動を真剣に取り組みたい方を募集しています！
          </div>
          <div>
            そんなメンバーが<Marker theme='yellow'>「成長」</Marker>
            できるようにサポートしていきたいと思っています。
          </div>
          <div>12月下旬〜2026年1月デビュー予定です。</div>
        </Section>
        <Section label='🎵プロデューサーについて'>
          <div>
            <Marker theme='yellow'>関ケ原唄姫合戦</Marker>や
            <Marker theme='yellow'>クロフェス</Marker>
            の制作に携わっており、本年は「関ケ原アプリ」の提案などを通してイベントの企画から行っています。
          </div>
          <div>
            ライブを通して、楽しさと感動を届けられるグループにしていきたいと思っています。また、メンバーにとっての成長環境を作っていけたらと思っています。
          </div>
        </Section>
        <Section label='🎵運営の特徴'>
          <div>大型夏フェスに関わってきており、イベント制作実績を積んでいます。</div>
          <div>マネジメント経験あるスタッフ構成で活動をサポートしてまいります。</div>
        </Section>
        <Section label='🎵オーディション参加費'>
          <div>ありません</div>
          <div className='text-xs pl-2'>※但し、面接会場までの交通費のみご負担頂きます。</div>
        </Section>
        <Section label='🎵報酬体系'>
          <div>歩合制（当社規定のバック率25〜50%）</div>
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
            0: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            500: {
              slidesPerView: 1.8,
              spaceBetween: 30,
            },
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
            <Link href='/member#佐藤ひかる'>
              <Img src={hikaru.src} alt='佐藤ひかる' />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href='/member#櫻葉ここ'>
              <Img src={koko.src} alt='櫻葉ここ' />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href='/member#橘みお'>
              <Img src={mio.src} alt='橘みお' />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href='/member#咲真まつり'>
              <Img src={matsuri.src} alt='咲真まつり' />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </LetterPanel>
  )
}

const Music = () => {
  return (
    <LetterPanel title='楽曲紹介'>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-4 items-center'>
          <audio
            src='https://audition.live-first.info/static/music/distiny_sample.mp3'
            controls
            controlsList='nodownload'
          ></audio>
          <audio
            src='https://audition.live-first.info/static/music/ryoomoi_sample.mp3'
            controls
            controlsList='nodownload'
          ></audio>
        </div>
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
          <Img src={costume.src} alt='衣装' />
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
