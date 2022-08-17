interface SideSectionProps {
  children: any;
}

export const SideSection = (props: SideSectionProps) => {
  return <section className='side_section'>{props.children}</section>;
};
