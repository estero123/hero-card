const useResponsive = () => {
  const isMobile = window.innerWidth < 640;
  return { isMobile }
};
export default useResponsive;
