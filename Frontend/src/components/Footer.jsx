const Footer = ({ completedTaskCount = 0, activeTaskCount = 0 }) => {
  return (
    <>
      {completedTaskCount + activeTaskCount > 0 && (
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            {completedTaskCount > 0 && (
              <>
                Great! You've completed {completedTaskCount} tasks. {" "}
                {activeTaskCount > 0 &&
                  `${activeTaskCount} tasks remaining. Fighting!`}
              </>
            )}
            {completedTaskCount === 0 && activeTaskCount > 0 && (
              <>Let's start do {activeTaskCount}!</>
            )}
          </p>
        </div>
      )}
    </>
  );
};

export default Footer;
