export const MemberCard = ({ member }) => {
  return (
    <a
      href={member.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full p-2 text-center border border-white rounded-md h-36 backdrop-blur-lg hover:shadow-lg"
    >
      <img
        className="h-32 mr-4 rounded-full"
        src={member.img}
        alt={member.name}
      />
      <div className="flex flex-col justify-center font-medium text-left">
        <p>{member.name}</p>
        <p className="italic">{member.role}</p>
      </div>
    </a>
  );
};
