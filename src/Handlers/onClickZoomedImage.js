export const onClickZoomedImage = (e, setZoom) => {
  if (!e.target.closest("button")) return;

  setZoom((zoom) => !zoom);
};
