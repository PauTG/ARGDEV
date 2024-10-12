export const MemberCard = ({ member }) => {
  return (
    <a
      href={member.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      // className="flex w-full p-2 text-center border border-white rounded-md h-36 backdrop-blur-lg hover:shadow-lg"
      className="card"
    >
      <img
        className="h-32 mr-4 rounded-full"
        src={member.img}
        alt={member.name}
      />
      <div className="justify-center text-left card-container">
        <p className="card-title">{member.name}</p>
        <p className="card-text">{member.role}</p>
      </div>
    </a>
  );
};
