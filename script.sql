USE [ostofit]
GO
/****** Object:  Table [dbo].[followers]    Script Date: 6/22/2023 3:54:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[followers](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_user] [int] NOT NULL,
	[follows_id_user] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[liked_comments]    Script Date: 6/22/2023 3:54:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[liked_comments](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_user] [int] NOT NULL,
	[id_comment] [int] NOT NULL,
	[liked_disliked] [bit] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[request_to_follow]    Script Date: 6/22/2023 3:54:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[request_to_follow](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_user] [int] NOT NULL,
	[request_id_user] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[user_details]    Script Date: 6/22/2023 3:54:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[user_details](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[username] [varchar](50) NOT NULL,
	[first_name] [varchar](50) NOT NULL,
	[last_name] [varchar](50) NOT NULL,
	[date_created] [date] NOT NULL,
	[profile_pic] [varchar](500) NULL,
	[is_verified] [smallint] NULL,
	[description] [varchar](500) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[user_videos]    Script Date: 6/22/2023 3:54:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[user_videos](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_user] [int] NOT NULL,
	[video_url] [varchar](500) NOT NULL,
	[title] [varchar](50) NOT NULL,
	[video_likes] [int] NULL,
	[video_path] [varchar](max) NULL,
	[date_posted] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[users]    Script Date: 6/22/2023 3:54:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[users](
	[id] [int] NOT NULL,
	[password] [varchar](50) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[video_comments]    Script Date: 6/22/2023 3:54:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[video_comments](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_user] [int] NOT NULL,
	[id_video] [int] NOT NULL,
	[comment] [varchar](500) NOT NULL,
	[comment_date] [datetime] NULL,
	[comment_likes] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[video_likes]    Script Date: 6/22/2023 3:54:36 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[video_likes](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_user] [int] NOT NULL,
	[id_video] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[followers] ON 

INSERT [dbo].[followers] ([id], [id_user], [follows_id_user]) VALUES (2, 2, 1)
INSERT [dbo].[followers] ([id], [id_user], [follows_id_user]) VALUES (5, 2, 3)
INSERT [dbo].[followers] ([id], [id_user], [follows_id_user]) VALUES (6, 3, 2)
INSERT [dbo].[followers] ([id], [id_user], [follows_id_user]) VALUES (7, 4, 1)
INSERT [dbo].[followers] ([id], [id_user], [follows_id_user]) VALUES (20, 1, 3)
INSERT [dbo].[followers] ([id], [id_user], [follows_id_user]) VALUES (22, 1, 2)
INSERT [dbo].[followers] ([id], [id_user], [follows_id_user]) VALUES (23, 3, 1)
INSERT [dbo].[followers] ([id], [id_user], [follows_id_user]) VALUES (24, 15, 1)
SET IDENTITY_INSERT [dbo].[followers] OFF
GO
SET IDENTITY_INSERT [dbo].[request_to_follow] ON 

INSERT [dbo].[request_to_follow] ([id], [id_user], [request_id_user]) VALUES (41, 1, 15)
INSERT [dbo].[request_to_follow] ([id], [id_user], [request_id_user]) VALUES (42, 16, 1)
SET IDENTITY_INSERT [dbo].[request_to_follow] OFF
GO
SET IDENTITY_INSERT [dbo].[user_details] ON 

INSERT [dbo].[user_details] ([id], [username], [first_name], [last_name], [date_created], [profile_pic], [is_verified], [description]) VALUES (1, N'emilje', N'Emil', N'Jerkovic', CAST(N'2023-05-09' AS Date), N'https://media.licdn.com/dms/image/C4E03AQFb-oRoV6yocQ/profile-displayphoto-shrink_800_800/0/1628493839539?e=1688601600&v=beta&t=8o6pVA-7TQa3L29hBgOllfQoond7PcnFlGDqGlFdEoA', 1, N'Software developer with a strong background in aviation. Spent approximately 2000 hours soaring through the clouds, and now with my feet firmly on the ground, diving into the exciting world of software development. Skilled in JavaScript, React, React Native, and Node. Test123')
INSERT [dbo].[user_details] ([id], [username], [first_name], [last_name], [date_created], [profile_pic], [is_verified], [description]) VALUES (2, N'matteol', N'Matteo', N'Lukac', CAST(N'2023-05-09' AS Date), NULL, 1, NULL)
INSERT [dbo].[user_details] ([id], [username], [first_name], [last_name], [date_created], [profile_pic], [is_verified], [description]) VALUES (3, N'snipcik', N'Robert', N'Ostovic', CAST(N'2023-05-09' AS Date), N'https://media.licdn.com/dms/image/C4D03AQG49xwlRDBHKg/profile-displayphoto-shrink_800_800/0/1660820217146?e=1688601600&v=beta&t=xaQhkXi9hML6PNO0Xuhg4O7DpMSrEmFIG9rE1aTl46A', 1, N'Football content from the Premier League')
INSERT [dbo].[user_details] ([id], [username], [first_name], [last_name], [date_created], [profile_pic], [is_verified], [description]) VALUES (4, N'MrBanana', N'Danko', N'Salopek', CAST(N'2023-05-11' AS Date), NULL, NULL, NULL)
INSERT [dbo].[user_details] ([id], [username], [first_name], [last_name], [date_created], [profile_pic], [is_verified], [description]) VALUES (15, N'GODMatko', N'Matko', N'Crkva', CAST(N'2023-06-05' AS Date), N'https://media.licdn.com/dms/image/D4D35AQEnELNIz0EKKg/profile-framedphoto-shrink_800_800/0/1672880263232?e=1687428000&v=beta&t=OilzfjeTSI-Bkw2D862W3sE82-urMy3F2tQYZTAbjtk', NULL, NULL)
INSERT [dbo].[user_details] ([id], [username], [first_name], [last_name], [date_created], [profile_pic], [is_verified], [description]) VALUES (16, N'LELMILSMURF', N'Emil', N'Jerkovic', CAST(N'2023-06-05' AS Date), NULL, NULL, NULL)
SET IDENTITY_INSERT [dbo].[user_details] OFF
GO
SET IDENTITY_INSERT [dbo].[user_videos] ON 

INSERT [dbo].[user_videos] ([id], [id_user], [video_url], [title], [video_likes], [video_path], [date_posted]) VALUES (38, 3, N'https://assets.codepen.io/6093409/river.mp4', N'WHAT A GOAL BY SON!!', 1, N'./ostofit_data/snipcik/38_son.mp4', CAST(N'2023-06-07T14:02:56.780' AS DateTime))
INSERT [dbo].[user_videos] ([id], [id_user], [video_url], [title], [video_likes], [video_path], [date_posted]) VALUES (60, 1, N'https://assets.codepen.io/6093409/river.mp4', N'Beautiful goal by SON!', NULL, N'./ostofit_data/emilje/60_son.mp4', CAST(N'2023-06-07T16:02:54.130' AS DateTime))
INSERT [dbo].[user_videos] ([id], [id_user], [video_url], [title], [video_likes], [video_path], [date_posted]) VALUES (61, 1, N'https://assets.codepen.io/6093409/river.mp4', N'Swimming in the river :)', NULL, N'./ostofit_data/emilje/61_river.mp4', CAST(N'2023-06-07T16:03:11.890' AS DateTime))
INSERT [dbo].[user_videos] ([id], [id_user], [video_url], [title], [video_likes], [video_path], [date_posted]) VALUES (62, 15, N'https://assets.codepen.io/6093409/river.mp4', N'Bowen winning goal in UECL', NULL, N'./ostofit_data/GODMatko/62_bowen.mp4', CAST(N'2023-06-09T16:37:43.210' AS DateTime))
INSERT [dbo].[user_videos] ([id], [id_user], [video_url], [title], [video_likes], [video_path], [date_posted]) VALUES (63, 15, N'https://assets.codepen.io/6093409/river.mp4', N'Swimming in the river in plitvice lakes!', NULL, N'./ostofit_data/GODMatko/63_river.mp4', CAST(N'2023-06-09T16:38:07.213' AS DateTime))
INSERT [dbo].[user_videos] ([id], [id_user], [video_url], [title], [video_likes], [video_path], [date_posted]) VALUES (64, 15, N'https://assets.codepen.io/6093409/river.mp4', N'Son amazing goal vs CP', NULL, N'./ostofit_data/GODMatko/64_son.mp4', CAST(N'2023-06-09T16:38:32.773' AS DateTime))
INSERT [dbo].[user_videos] ([id], [id_user], [video_url], [title], [video_likes], [video_path], [date_posted]) VALUES (65, 4, N'https://assets.codepen.io/6093409/river.mp4', N'grealish dive!!!!', NULL, N'./ostofit_data/MrBanana/65_grealish dive.mp4', CAST(N'2023-06-09T16:40:46.373' AS DateTime))
INSERT [dbo].[user_videos] ([id], [id_user], [video_url], [title], [video_likes], [video_path], [date_posted]) VALUES (66, 15, N'https://assets.codepen.io/6093409/river.mp4', N'123', NULL, N'./ostofit_data/GODMatko/66_grealish dive.mp4', CAST(N'2023-06-10T12:44:36.927' AS DateTime))
INSERT [dbo].[user_videos] ([id], [id_user], [video_url], [title], [video_likes], [video_path], [date_posted]) VALUES (67, 15, N'https://assets.codepen.io/6093409/river.mp4', N'777', NULL, N'./ostofit_data/GODMatko/67_bowen.mp4', CAST(N'2023-06-10T12:44:44.683' AS DateTime))
INSERT [dbo].[user_videos] ([id], [id_user], [video_url], [title], [video_likes], [video_path], [date_posted]) VALUES (68, 3, N'https://assets.codepen.io/6093409/river.mp4', N'Funny couple at the game', NULL, N'./ostofit_data/snipcik/68_funny.mp4', CAST(N'2023-06-11T22:48:23.260' AS DateTime))
INSERT [dbo].[user_videos] ([id], [id_user], [video_url], [title], [video_likes], [video_path], [date_posted]) VALUES (69, 3, N'https://assets.codepen.io/6093409/river.mp4', N'great block', NULL, N'./ostofit_data/snipcik/69_great block.mp4', CAST(N'2023-06-11T22:48:33.503' AS DateTime))
INSERT [dbo].[user_videos] ([id], [id_user], [video_url], [title], [video_likes], [video_path], [date_posted]) VALUES (70, 3, N'https://assets.codepen.io/6093409/river.mp4', N'inzaghi mad funny', NULL, N'./ostofit_data/snipcik/70_inzaghi mad.mp4', CAST(N'2023-06-11T22:50:01.357' AS DateTime))
INSERT [dbo].[user_videos] ([id], [id_user], [video_url], [title], [video_likes], [video_path], [date_posted]) VALUES (71, 3, N'https://assets.codepen.io/6093409/river.mp4', N'matic', NULL, N'./ostofit_data/snipcik/71_matic.mp4', CAST(N'2023-06-11T22:50:11.567' AS DateTime))
INSERT [dbo].[user_videos] ([id], [id_user], [video_url], [title], [video_likes], [video_path], [date_posted]) VALUES (72, 3, N'https://assets.codepen.io/6093409/river.mp4', N'moyes', 1, N'./ostofit_data/snipcik/72_moyes.mp4', CAST(N'2023-06-11T22:50:20.160' AS DateTime))
INSERT [dbo].[user_videos] ([id], [id_user], [video_url], [title], [video_likes], [video_path], [date_posted]) VALUES (74, 4, N'https://assets.codepen.io/6093409/river.mp4', N'123', NULL, N'./ostofit_data/MrBanana/74_bowen.mp4', CAST(N'2023-06-11T22:51:24.027' AS DateTime))
INSERT [dbo].[user_videos] ([id], [id_user], [video_url], [title], [video_likes], [video_path], [date_posted]) VALUES (75, 4, N'https://assets.codepen.io/6093409/river.mp4', N'456', NULL, N'./ostofit_data/MrBanana/75_funny.mp4', CAST(N'2023-06-11T22:51:30.497' AS DateTime))
INSERT [dbo].[user_videos] ([id], [id_user], [video_url], [title], [video_likes], [video_path], [date_posted]) VALUES (76, 4, N'https://assets.codepen.io/6093409/river.mp4', N'vini', NULL, N'./ostofit_data/MrBanana/76_vinicius.mp4', CAST(N'2023-06-11T22:51:38.613' AS DateTime))
INSERT [dbo].[user_videos] ([id], [id_user], [video_url], [title], [video_likes], [video_path], [date_posted]) VALUES (77, 4, N'https://assets.codepen.io/6093409/river.mp4', N'SOONNNN', NULL, N'./ostofit_data/MrBanana/77_son.mp4', CAST(N'2023-06-11T22:51:46.980' AS DateTime))
INSERT [dbo].[user_videos] ([id], [id_user], [video_url], [title], [video_likes], [video_path], [date_posted]) VALUES (78, 15, N'https://assets.codepen.io/6093409/river.mp4', N'vin', NULL, N'./ostofit_data/GODMatko/78_vinicius.mp4', CAST(N'2023-06-11T22:52:34.420' AS DateTime))
INSERT [dbo].[user_videos] ([id], [id_user], [video_url], [title], [video_likes], [video_path], [date_posted]) VALUES (79, 15, N'https://assets.codepen.io/6093409/river.mp4', N'sonny', NULL, N'./ostofit_data/GODMatko/79_son.mp4', CAST(N'2023-06-11T22:52:41.827' AS DateTime))
INSERT [dbo].[user_videos] ([id], [id_user], [video_url], [title], [video_likes], [video_path], [date_posted]) VALUES (80, 15, N'https://assets.codepen.io/6093409/river.mp4', N'swimming', NULL, N'./ostofit_data/GODMatko/80_river.mp4', CAST(N'2023-06-11T22:52:50.357' AS DateTime))
INSERT [dbo].[user_videos] ([id], [id_user], [video_url], [title], [video_likes], [video_path], [date_posted]) VALUES (81, 15, N'https://assets.codepen.io/6093409/river.mp4', N'67778', NULL, N'./ostofit_data/GODMatko/81_moyes.mp4', CAST(N'2023-06-11T22:53:00.180' AS DateTime))
INSERT [dbo].[user_videos] ([id], [id_user], [video_url], [title], [video_likes], [video_path], [date_posted]) VALUES (82, 15, N'https://assets.codepen.io/6093409/river.mp4', N'moyes medal', NULL, N'./ostofit_data/GODMatko/82_matic.mp4', CAST(N'2023-06-11T22:53:09.983' AS DateTime))
INSERT [dbo].[user_videos] ([id], [id_user], [video_url], [title], [video_likes], [video_path], [date_posted]) VALUES (83, 15, N'https://assets.codepen.io/6093409/river.mp4', N'block', NULL, N'./ostofit_data/GODMatko/83_great block.mp4', CAST(N'2023-06-11T22:53:18.910' AS DateTime))
INSERT [dbo].[user_videos] ([id], [id_user], [video_url], [title], [video_likes], [video_path], [date_posted]) VALUES (84, 15, N'https://assets.codepen.io/6093409/river.mp4', N'mad coach', NULL, N'./ostofit_data/GODMatko/84_inzaghi mad.mp4', CAST(N'2023-06-11T22:53:27.763' AS DateTime))
INSERT [dbo].[user_videos] ([id], [id_user], [video_url], [title], [video_likes], [video_path], [date_posted]) VALUES (85, 15, N'https://assets.codepen.io/6093409/river.mp4', N'bowyyy', NULL, N'./ostofit_data/GODMatko/85_bowen.mp4', CAST(N'2023-06-11T22:53:35.677' AS DateTime))
INSERT [dbo].[user_videos] ([id], [id_user], [video_url], [title], [video_likes], [video_path], [date_posted]) VALUES (87, 3, N'https://assets.codepen.io/6093409/river.mp4', N'Salah GREAT GOAL', NULL, N'./ostofit_data/snipcik/87_salah.mp4', CAST(N'2023-06-19T10:58:22.257' AS DateTime))
SET IDENTITY_INSERT [dbo].[user_videos] OFF
GO
INSERT [dbo].[users] ([id], [password]) VALUES (1, N'123')
INSERT [dbo].[users] ([id], [password]) VALUES (2, N'123')
INSERT [dbo].[users] ([id], [password]) VALUES (3, N'123')
INSERT [dbo].[users] ([id], [password]) VALUES (4, N'123')
INSERT [dbo].[users] ([id], [password]) VALUES (15, N'progamer1337!')
INSERT [dbo].[users] ([id], [password]) VALUES (16, N'progamer1992!')
GO
SET IDENTITY_INSERT [dbo].[video_comments] ON 

INSERT [dbo].[video_comments] ([id], [id_user], [id_video], [comment], [comment_date], [comment_likes]) VALUES (18, 1, 60, N'kek123', CAST(N'2023-06-16T16:18:36.973' AS DateTime), NULL)
INSERT [dbo].[video_comments] ([id], [id_user], [id_video], [comment], [comment_date], [comment_likes]) VALUES (19, 1, 38, N'Incredible teamwork and goal!', CAST(N'2023-06-17T17:41:30.840' AS DateTime), NULL)
INSERT [dbo].[video_comments] ([id], [id_user], [id_video], [comment], [comment_date], [comment_likes]) VALUES (21, 1, 38, N'Test video comment! :D', CAST(N'2023-06-19T16:21:37.640' AS DateTime), NULL)
INSERT [dbo].[video_comments] ([id], [id_user], [id_video], [comment], [comment_date], [comment_likes]) VALUES (22, 1, 72, N'Nice moment! :)', CAST(N'2023-06-19T16:29:20.560' AS DateTime), NULL)
SET IDENTITY_INSERT [dbo].[video_comments] OFF
GO
SET IDENTITY_INSERT [dbo].[video_likes] ON 

INSERT [dbo].[video_likes] ([id], [id_user], [id_video]) VALUES (109, 1, 38)
INSERT [dbo].[video_likes] ([id], [id_user], [id_video]) VALUES (110, 1, 72)
SET IDENTITY_INSERT [dbo].[video_likes] OFF
GO
