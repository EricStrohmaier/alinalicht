import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  const background = "http://localhost:3000/palmred.png";
  const titleImage = "http://localhost:3000/alina-licht-text-white.png";
  const coverImage = "http://localhost:3000/img/nobody.jpg";

  return new ImageResponse(
    (
      <div
        style={{
          width: size.width,
          height: size.height,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
          color: "#ffffff",
          overflow: "hidden",
        }}
      >
        <img
          src={background}
          alt="Background"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.6)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top, rgba(0,0,0,0.25), rgba(0,0,0,0.85))",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            padding: "48px 72px 40px",
            boxSizing: "border-box",
            gap: 32,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <img
              src={titleImage}
              alt="Alina Licht"
              style={{
                height: 96,
                objectFit: "contain",
                filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.8))",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 40,
              width: "100%",
              maxWidth: 900,
            }}
          >
            <div
              style={{
                borderRadius: 32,
                overflow: "hidden",
                boxShadow: "0 18px 45px rgba(0,0,0,0.85)",
                display: "flex",
              }}
            >
              <img
                src={coverImage}
                alt="Latest release cover"
                style={{
                  width: 260,
                  height: 260,
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                gap: 12,
                maxWidth: 460,
              }}
            >
              <div
                style={{
                  fontSize: 32,
                  fontWeight: 700,
                  letterSpacing: 0.04,
                }}
              >
                Nobody
              </div>
              <div
                style={{
                  fontSize: 22,
                  opacity: 0.92,
                }}
              >
                Alina Licht - Top tracks
              </div>
              <div
                style={{
                  marginTop: 18,
                  padding: "10px 22px",
                  borderRadius: 9999,
                  border: "1px solid rgba(30,215,96,0.7)",
                  background:
                    "linear-gradient(90deg, rgba(30,215,96,0.3), rgba(30,215,96,0.1))",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: 9999,
                    backgroundColor: "#1ED760",
                    boxShadow: "0 0 12px rgba(30,215,96,0.7)",
                  }}
                />
                <span
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                  }}
                >
                  Listen on Spotify
                </span>
              </div>
            </div>
          </div>
          <div
            style={{
              fontSize: 18,
              opacity: 0.9,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span>New music out now</span>
            <span
              style={{
                width: 4,
                height: 4,
                borderRadius: 9999,
                backgroundColor: "rgba(255,255,255,0.7)",
              }}
            />
            <span>alinalicht.com</span>
          </div>
        </div>
      </div>
    ),
    {
      width: size.width,
      height: size.height,
    }
  );
}
