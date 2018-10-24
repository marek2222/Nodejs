select 	id,tytul,autor,cialo	
from nodejs.[dbo].[_b_Articles]


/*  Add three record do DB  */
/*
IF OBJECT_ID (N'_b_Articles', N'U') IS NULL 
begin
	SET ANSI_NULLS ON;
	SET QUOTED_IDENTIFIER ON;
	CREATE TABLE nodejs.[dbo].[_b_Articles](
		id		int  NULL, /*IDENTITY(1,1) NOT NULL,*/
		tytul		nvarchar(50) NULL,
		autor	   nvarchar(50) NULL,
		cialo		nvarchar(50) NULL
	) ON [PRIMARY];

	insert into nodejs.[dbo].[_b_Articles](id,tytul,autor,cialo)
			    select id= 1,tytul= 'Article One',			autor= 'Brad Traversy',cialo= 'This is article one'
	union   select id= 2,tytul= 'Article Two',			autor= 'John Doe',			cialo= 'This is article two'
	union   select id= 3,tytul= 'Article Three',autor= 'Brad Traversy',cialo= 'This is article three'
	
end
*/
