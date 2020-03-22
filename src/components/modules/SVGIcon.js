import React from 'react';

const getViewBox = name => {
  switch (name) {
    case "netflix":
      return (
        "0 0 1024 276.742"
      )
    case "apple":
      return (
        "0 0 496.255 608.728"
      )
    case "zipcar":
      return (
        "0 0 109 32"
      )
    default:
      return "0 0 24 24";
  }
};

const getTitle = (name) => {
  switch (name) {
    case "twitter":
      return (
        <title>Twitter icon</title>
      );
    case "github":
      return (
        <title>GitHub icon</title>
      );
    case "linkedin":
      return (
        <title>LinkedIn icon</title>
      );
    case "netflix":
      return (
        <title>Netflix Logo</title>
      );
    case "apple":
      return (
        <title>Apple Logo</title>
      );
    case "zipcar":
      return (
        <title>ZipCar Logo</title>
      );
    default:
      return <title />;
  }
};

const getPath = (name, props) => {
  switch (name) {
    case "twitter":
      return (
        <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/>
      );
    case "github":
      return (
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      );
    case "linkedin":
      return (
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      );
      case "netflix":
        return (
          <path fill="#E50914" d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676L44.051 119.724v151.073C28.647 272.418 14.594 274.58 0 276.742V0h41.08l56.212 157.021V0h43.511zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461V0h119.724v43.241h-76.482zm237.284-58.104h-44.862V242.15c-14.594 0-29.188 0-43.239.539V43.242h-44.862V0H463.22l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433V0h120.808v43.241h-78.375zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676V0h43.24zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242V0h-42.43zM1024 0l-54.863 131.615L1024 276.742c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75L871.576 0h46.482l28.377 72.699L976.705 0H1024z"/>
        )
      case "apple":
        return (
          <path fill="#999" d="M273.81 52.973C313.806.257 369.41 0 369.41 0s8.271 49.562-31.463 97.306c-42.426 50.98-90.649 42.638-90.649 42.638s-9.055-40.094 26.512-86.971zM252.385 174.662c20.576 0 58.764-28.284 108.471-28.284 85.562 0 119.222 60.883 119.222 60.883s-65.833 33.659-65.833 115.331c0 92.133 82.01 123.885 82.01 123.885s-57.328 161.357-134.762 161.357c-35.565 0-63.215-23.967-100.688-23.967-38.188 0-76.084 24.861-100.766 24.861C89.33 608.73 0 455.666 0 332.628c0-121.052 75.612-184.554 146.533-184.554 46.105 0 81.883 26.588 105.852 26.588z"/>
        )
      case "zipcar":
        return (
          <>
          <path d="m15.993.018c-8.817 0-15.989 7.173-15.989 15.989s7.173 15.988 15.989 15.988 15.988-7.172 15.988-15.988c0-8.817-7.172-15.989-15.988-15.989" fill="#fff"/>
          <path d="m1.58 16.007c0-7.96 6.453-14.412 14.413-14.412s14.411 6.453 14.411 14.412-6.452 14.412-14.411 14.412c-7.96 0-14.412-6.453-14.412-14.412" fill="#51a601"/>
          <path d="m29.717 21.257c.076-.204.147-.41.215-.619h-12.082l.59-.755h8.369a.31.31 0 0 0 .315-.305.31.31 0 0 0 -.315-.303h-7.893l.58-.741h4.257c.142 0 .259-.139.259-.31 0-.172-.117-.31-.26-.31h-11.294l6.923-9.021h-11.395v2.463h6.067l-6.355 8.242-1.308 1.656 3.96.003h1.084a2.886 2.886 0 0 1 5.35 0z" fill="#fff"/>
          <path d="m16.333 22.372a2.225 2.225 0 1 1 -4.45 0 2.225 2.225 0 0 1 4.45 0zm47.718-2.739c-2.605 0-2.741-2.303-2.741-4.304 0-2.029.137-4.331 2.741-4.331 2.632 0 2.769 2.165 2.769 4.331 0 2.139-.137 4.304-2.769 4.304zm-5.538 8.252h2.797v-7.1c1.042.987 2.165 1.644 3.59 1.644 1.701 0 2.934-.767 3.73-1.809.767-.987.986-1.891.986-5.29 0-3.428-.22-4.332-.987-5.32-.795-1.04-2.028-1.809-3.728-1.809-1.425 0-2.714.658-3.591 1.618v-1.453h-2.797zm24.88-7.868c-1.206 1.399-2.879 2.412-4.99 2.412-3.207 0-6.304-2.028-6.304-7.1 0-5.099 3.097-7.128 6.304-7.128 2.111 0 3.784 1.015 4.99 2.413l-2.056 1.837c-.686-.85-1.673-1.453-2.824-1.453-2.275 0-3.618 1.288-3.618 4.331 0 3.016 1.343 4.304 3.618 4.304 1.151 0 2.138-.603 2.824-1.452zm9.664-2.632c0 2.166-.795 2.412-3.125 2.412-1.891 0-2.632-.822-2.632-1.754 0-1.014.768-1.672 2.413-1.672h3.344zm0 4.88h2.797v-9.485c0-3.427-2.358-4.579-5.785-4.579-2.083 0-3.619.549-4.688 2.03l2.194 1.672c.493-.796 1.178-1.07 2.631-1.07 2.002 0 2.851.467 2.851 1.782v1.453h-3.865c-2.989 0-4.524 1.892-4.524 4.113 0 2.412 1.81 4.249 4.908 4.249 1.891 0 2.851-.439 3.426-1.399h.055zm6.415-13.899h2.796v1.48h.055c.877-1.096 2.139-1.644 3.62-1.644 1.123 0 2.055.41 2.905 1.069l-2.029 2.412c-.658-.493-1.124-.685-1.836-.685-1.371 0-2.714.877-2.714 2.906v8.361h-2.796v-13.899zm8.827 13.008a.976.976 0 1 1 -1.953.001.976.976 0 0 1 1.953 0zm-2.159 0c.001.652.53 1.181 1.182 1.182.652-.001 1.18-.53 1.182-1.182a1.184 1.184 0 0 0 -1.182-1.182c-.652.001-1.18.53-1.182 1.182zm1.507.681h.257l-.39-.599c.2-.027.35-.13.35-.374 0-.269-.156-.389-.479-.389h-.515v1.363h.205v-.594h.217zm-.572-.762v-.431h.277c.211 0 .308.063.308.217 0 .15-.097.214-.308.214zm-69.07-1.248 6.964-9.212h-6.58v-2.467h9.98v2.22l-6.964 9.047h6.963v2.632h-10.362v-2.22zm13.585-11.679h2.797v13.899h-2.797zm0-5.62h2.797v2.796h-2.797z" fill="#4d4d5a"/>
          </>
        )
    default:
      return <path />;
  }
};

const SVGIcon = ({
  name = "",
  style = {},
  viewBox = "",
  width ="100%",
  className = "",
  height = "100%",
  role = "img"
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox || getViewBox(name)}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    role={role}
  >
    {getTitle(name)}
    {getPath(name)}
  </svg>
);

export default SVGIcon;