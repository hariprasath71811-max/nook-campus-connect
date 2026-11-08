import edge_tts
import asyncio

segments = [
    "Welcome to Nook, micro-connections for campus life. Students often feel painfully disconnected in crowded campus spaces like dining halls and silent library floors. Social friction, fear of rejection, and academic burnout leave them isolated. Nook bridges that gap with zero-pressure micro-connections.",
    "Find a Nook lets you filter open tables by intent: quick lunch, silent study, casual chat, or a board game break. Each card shows the host, location, seats, and a vibe badge. Click Pull up a Chair to send a gentle ping. Zero pressure to stay.",
    "Want to host? Drop a pin with your location, connection goal, open seats, and a self-expiring timer. Add an icebreaker prompt. Your table goes live instantly in the feed.",
    "Campus Vibes helps you rediscover cozy underutilized spaces by sentiment: quiet focus, lively and social, hidden sunlit corner. Daily Grounding offers a sixty second breathing pacer and mood check-in, awarding a streak and suggesting rest or reaching out.",
    "The UX Research drawer reveals our persona Alex, survey insights showing seventy four percent of students want to connect but do not know who is approachable, and our design decisions. Nook: serendipity on campus. Thank you.",
]

async def main():
    for i, text in enumerate(segments, 1):
        communicate = edge_tts.Communicate(text, "en-US-AriaNeural")
        await communicate.save(f"C:/Users/DELL/OneDrive/Documents/Default Project/nook/assets/voice_seg{i}.mp3")
        print(f"saved seg{i}")

asyncio.run(main())
