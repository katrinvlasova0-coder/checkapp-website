type AuthorBioProps = {
  name: string;
  role: string;
  checkedBy?: string;
};

export function AuthorBio({ name, role, checkedBy }: AuthorBioProps) {
  return (
    <div className="surface rounded-3xl p-6">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-text">{name}</p>
          <p className="text-sm text-text-secondary">{role}</p>
        </div>
      </div>
      {checkedBy && (
        <p className="mt-4 text-sm text-text-secondary">
          Checked by: <span className="font-medium text-text">{checkedBy}</span>
        </p>
      )}
    </div>
  );
}
