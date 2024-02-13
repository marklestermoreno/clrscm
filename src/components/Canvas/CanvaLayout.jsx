import React from "react";
import "./Canvas.css";

const CanvasMain = ({ textColor, backgroundColor, isBackground }) => {
  return (
    <>
      <div
        className="canvas-layout-container"
        style={{ backgroundColor: backgroundColor, color: textColor }}
      >
        <h1 className="header-caption font-bold">Welcome to Color Scheme</h1>

        <p className="label-caption font-regular">
          "Welcome to our kaleidoscopic world of color! Beyond mere aesthetics,
          colors hold a fascinating array of psychological and cultural
          meanings. Take the vivacious hue of red, for instance. This color not
          only symbolizes passion but has been scientifically proven to increase
          heart rates and stimulate intense emotions. On the flip side, the
          serene embrace of blue is renowned for its calming effects, promoting
          feelings of tranquility and peace. The sunny disposition of yellow
          exudes optimism and joy, acting as a visual embodiment of sunshine
          itself. Venture further into the spectrum, and you'll find that green,
          with its myriad shades, owes its prominence to the human eye's ability
          to distinguish more variations of this color than any other, a
          testament to our deep-rooted connection with nature.
        </p>

        <div className="large-screen-content">
          <p className="label-caption font-regular">
            Remember, the color combinations you choose aren't just visual
            elements; they shape the emotional tone of your digital space.
            Whether you're crafting a lively and dynamic interface or
            cultivating a calming and sophisticated ambiance, our color scheme
            tool empowers you to curate an online environment that resonates
            with your vision. So, dive into the psychology of colors, embrace
            their cultural nuances, and let your website become a reflection of
            the diverse emotions and stories colors can tell."
          </p>

          <p className="label-caption font-regular">
            Our color scheme tool invites you to not only explore the artistic
            aspects of color but also appreciate the scientific marvels that
            underpin their existence. Unleash your creativity, experiment with
            shades and tones, and witness firsthand how the marriage of art and
            science unfolds within the vibrant palette of your website. From the
            emotionally charged reds to the serene blues, from the regal purples
            to the earthy greens, let your digital canvas be a testament to the
            beauty, complexity, and endless possibilities of the world of
            color."
          </p>

          <p className="label-caption font-regular">
            "Step into a world where colors are not just visual elements but
            storytellers of emotion. The passionate red, scientifically proven
            to quicken heartbeats, contrasts with the calming embrace of blue,
            fostering tranquility. Yellow beams with optimism, green whispers
            the language of nature, and purple exudes regal sophistication. Our
            color picker is your passport to this spectrum, inviting you to
            craft your narrative and explore the emotional tapestry of each hue.
            Navigate through cultural nuances, from the purity of white to the
            mysterious depth of black, and let your website become a canvas for
            the rich symphony of colors."
          </p>
        </div>

        <p className="label-caption font-regular">
          "Now, let's uncover some fascinating random facts about colors. Did
          you know that the world's favorite color is blue, representing
          calmness and dependability? Pink was originally considered a color for
          boys, while blue was associated with femininity. The iconic color
          'Magenta' doesn't exist in the natural spectrum; our brains create it
          by blending red and blue light. In nature, the vibrant colors of
          flamingos come from their diet of shrimp and algae. Lastly, the color
          yellow is the most visible color in the spectrum, explaining its use
          for caution signs. Embrace these colorful tidbits as you embark on
          your journey of creating a visually captivating website."
        </p>
      </div>
    </>
  );
};

export default CanvasMain;
