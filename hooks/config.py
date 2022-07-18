import os

url = "https://cordot.readthedocs.io"

def configure(config, **kwargs):
	if "READTHEDOCS" in os.environ:
		version = os.environ["READTHEDOCS_VERSION"]
		language = os.environ["READTHEDOCS_LANGUAGE"]
		config["site_url"] = f"{url}/{language}/{version}/"
	return config