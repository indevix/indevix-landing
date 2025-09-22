import type { Member } from "@/types/member.types";
import Image from "next/image";

export function MemberCard({ member }: { member: Member }) {
  return (
    <div className="flex items-center max-w-[440px] gap-5 p-5 bg-card border border-border rounded-[40px]">
      <Image
        src={member.photo}
        alt={member.name}
        width={160}
        height={160}
        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mb-4"
      />
      <div className="flex flex-col gap-[5px]">
        <h3 className="text-xl font-semibold">{member.name}</h3>
        {member.position.map((position) => (
          <p
            key={position}
            className="text-[15px] md:text-[17px] font-extralight"
          >
            {position}
          </p>
        ))}
      </div>
    </div>
  );
}
