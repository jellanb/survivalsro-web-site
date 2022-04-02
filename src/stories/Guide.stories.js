import Guide from "../components/Guide/Guide";

export default {
  title: "Components/Guide",
  component: Guide,
  argTypes: {},
};

const Template = (args) => <Guide {...args} />;

export const Example = Template.bind({});
Example.args = {
  sections: [
    {
      bgUrl:
        "https://www.rae.es/sites/default/files/styles/wysiwyg_100_/public/2021-07/ramdomtwitter_Mesa%20de%20trabajo%201.png?itok=JfO9YVoD",
      annexes: [
        {
          video: {
            url: "https://www.youtube.com/embed/0156DKSm1V0",
            width: 600,
            height: 400,
          },
        },
      ],
    },
    {
      annexes: [
        {
          text: {
            value:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id sem et nisi ultricies viverra. Duis sagittis viverra pulvinar. Maecenas eget leo maximus, pulvinar massa et, consectetur enim. Mauris ut ligula cursus, bibendum mi quis, hendrerit est. Fusce ornare nisi ac mauris pharetra placerat. Aenean et fringilla arcu, quis accumsan libero. Etiam neque ipsum, iaculis quis malesuada et, consequat in lorem. Sed non nisl vel arcu bibendum congue ornare sit amet ipsum. Duis vel tempor libero. Vestibulum nec sagittis dolor, at convallis sem. Vestibulum quis ipsum vel urna fringilla cursus ac eu orci.",
            width: 250,
            size: 1,
          },
        },
      ],
    },
    {
      annexes: [
        {
          image: {
            url: "https://s2.coinmarketcap.com/static/img/coins/64x64/3388.png",
            size: 5,
          },
          position: {
            x: 50,
            y: 50,
          },
        },
      ],
    },
  ],
};
