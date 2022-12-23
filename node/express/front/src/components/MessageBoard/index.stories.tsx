import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { MessageBoard } from '.'

const Meta: ComponentMeta<typeof MessageBoard> = {
  title: 'MessageBoard',
  component: MessageBoard,
  parameters: {
    docs: {
      description: {
        component: 'MessageBoardコンポーネント',
      },
    },
  },
}

export default Meta

export const Default: ComponentStoryObj<typeof MessageBoard> = {
  args: {
    messages: [
      {
        id: 1,
        message: 'M',
        created_at: '2022-02-02 00:00:00',
        user_name: 'User Name',
      },
    ],
  },
}

export const _メッセージが長い300文字: ComponentStoryObj<typeof MessageBoard> =
  {
    args: {
      messages: [
        {
          id: 1,
          message:
            '何は事実けっしてその留学隊というののためが聞かたた。つい次第に病気学はもしその講演ですましじゃを売って得るだをは焦燥描いありまして、まだにもしませでたます。本位を放っです事もひとまず前にようやくでたます。すなわち岡田さんの切望甲それほど相違が拵えまし主人どういう理由あなたか立証へってご説明ででたたて、この十一月はあなたか男菓子とあてるて、三宅君ののを文壇の私を何だかお焦燥とすれば私義務のご関係になりように何しろご出立で繰っあるたて、単に現に発見を払っずているた事が怖がったです。またしかもお主義から知れのはそう必要と反しなくっで、その人へは遂げよませながらに対するろが行くばなりたです。',
          created_at: '2022-02-02 00:00:00',
          user_name: 'User Name',
        },
      ],
    },
  }

export const _メッセージが複数ある: ComponentStoryObj<typeof MessageBoard> = {
  args: {
    messages: [
      {
        id: 1,
        message: 'Message1',
        created_at: '2022-02-02 00:00:00',
        user_name: 'User Name',
      },
      {
        id: 2,
        message: 'Message2',
        created_at: '2022-02-02 00:00:00',
        user_name: 'User Name',
      },
      {
        id: 3,
        message: 'Message3',
        created_at: '2022-02-02 00:00:00',
        user_name: 'User Nameeeeeeeeeeeeeeee',
      },
      {
        id: 4,
        message: 'Message4',
        created_at: '2022-02-02 00:00:00',
        user_name: 'User Name',
      },
      {
        id: 5,
        message: 'Message5',
        created_at: '2022-02-02 00:00:00',
        user_name: 'User Name',
      },
      {
        id: 6,
        message: 'Message6',
        created_at: '2022-02-02 00:00:00',
        user_name: 'User Name',
      },
      {
        id: 7,
        message: 'Message7',
        created_at: '2022-02-02 00:00:00',
        user_name: 'User Name',
      },
    ],
  },
}

export const _メッセージが複数ある_長文含む: ComponentStoryObj<
  typeof MessageBoard
> = {
  args: {
    messages: [
      {
        id: 1,
        message: 'Message1',
        created_at: '2022-02-02 00:00:00',
        user_name: 'User Name',
      },
      {
        id: 2,
        message: 'Message2',
        created_at: '2022-02-02 00:00:00',
        user_name: 'User Name',
      },
      {
        id: 3,
        message: 'Message3',
        created_at: '2022-02-02 00:00:00',
        user_name: 'User Name',
      },
      {
        id: 4,
        message: 'Message4',
        created_at: '2022-02-02 00:00:00',
        user_name: 'User Name',
      },
      {
        id: 5,
        message: 'Message5',
        created_at: '2022-02-02 00:00:00',
        user_name: 'User Name',
      },
      {
        id: 6,
        message:
          '何は事実けっしてその留学隊というののためが聞かたた。つい次第に病気学はもしその講演ですましじゃを売って得るだをは焦燥描いありまして、まだにもしませでたます。本位を放っです事もひとまず前にようやくでたます。すなわち岡田さんの切望甲それほど相違が拵えまし主人どういう理由あなたか立証へってご説明ででたたて、この十一月はあなたか男菓子とあてるて、三宅君ののを文壇の私を何だかお焦燥とすれば私義務のご関係になりように何しろご出立で繰っあるたて、単に現に発見を払っずているた事が怖がったです。またしかもお主義から知れのはそう必要と反しなくっで、その人へは遂げよませながらに対するろが行くばなりたです。',
        created_at: '2022-02-02 00:00:00',
        user_name: 'User Name',
      },
      {
        id: 7,
        message: 'Message7',
        created_at: '2022-02-02 00:00:00',
        user_name: 'User Name',
      },
    ],
  },
}
