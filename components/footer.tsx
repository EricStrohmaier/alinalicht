import SocialIcon from "./SocialIcon";

export const Footer = () => {
  return (
    <div className="flex gap-6 items-center justify-center w-full">
      <div className="flex flex-wrap justify-center items-center p-2 py-5 h-full">
        {/* Music Platforms */}
        <SocialIcon
          title={"Spotify"}
          img="/icons/spotify.png"
          href={
            "https://open.spotify.com/artist/1Nb4vxRmJZpwJXuHs5ZQO3?si=613qz-chSwCch1dpmStooQ"
          }
        />
        <SocialIcon
          title={"Apple-Music"}
          img="/icons/apple-music.png"
          href={"https://music.apple.com/at/artist/alina-licht/1691736862"}
        />
        <SocialIcon
          title={"Youtube"}
          img="/icons/youtube.png"
          href={"https://music.youtube.com/channel/UCXszl9akVDIK2j8DUJYh1ww"}
        />
        <SocialIcon
          title={"Soundcloud"}
          img="/icons/soundcloud.png"
          href={"https://soundcloud.com/alinalicht"}
        />
        <SocialIcon
          title={"Tidal"}
          img="/icons/tidal.png"
          href={"https://listen.tidal.com/artist/39963384"}
        />
        <SocialIcon
          title={"Beatport"}
          img="/icons/beatport.png"
          href={"https://www.beatport.com/artist/alina-licht/1135682"}
        />
        <SocialIcon
          title={"Bandcamp"}
          img="/icons/bandcamp.png"
          href={"https://alinalicht.bandcamp.com/track/stay-hydrated"}
        />
        {/* Social Media */}
        <SocialIcon
          title={"Instagram"}
          img="/icons/instagram.png"
          href={"https://www.instagram.com/alinalicht.dj"}
        />
        <SocialIcon
          title={"Tiktok"}
          img="/icons/tiktok.png"
          href={"https://www.tiktok.com/@alinalicht"}
        />
        <SocialIcon
          title={"Facebook"}
          img="/icons/facebook.png"
          href={"https://facebook.com/alinalicht.dj"}
        />
        <SocialIcon
          title={"Twitter"}
          img="/icons/twitter.png"
          href={"https://twitter.com/DJAlinaLicht"}
        />
      </div>
    </div>
  );
};
