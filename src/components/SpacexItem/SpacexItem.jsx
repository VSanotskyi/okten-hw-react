import css from "./SpacexItem.module.css";

const SpacexItem = ({item}) => {
    const {mission_name, launch_year, links: {mission_patch_small}} = item;
    return (
        <li className={css.item}>
            <h3>{mission_name}</h3>
            <p>Year: {launch_year}</p>
            <img src={mission_patch_small}
                 alt={mission_name}
                 width={200}
                 height={200}
            />
        </li>
    );
};

export default SpacexItem;